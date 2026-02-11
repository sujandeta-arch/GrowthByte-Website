import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.company || !body.service) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      )
    }
    
    // Send to Google Apps Script webhook
    const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL
    
    if (!webhookUrl) {
      console.error('GOOGLE_APPS_SCRIPT_WEBHOOK_URL not configured')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }
    
    // Debug logging (remove in production)
    console.log('Webhook URL configured:', webhookUrl ? 'Yes (URL present)' : 'No')
    console.log('Sending data to Google Apps Script webhook...')
    
    let response
    try {
      response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          company: body.company,
          service: body.service,
          phone: body.phone || '',
          message: body.message || '',
        }),
      })
    } catch (fetchError) {
      console.error('Network error fetching webhook:', fetchError)
      throw new Error(`Network error: Unable to connect to Google Sheets webhook. ${fetchError instanceof Error ? fetchError.message : 'Unknown error'}`)
    }
    
    // Read response text first (can only read once)
    const responseText = await response.text()
    
    if (!response.ok) {
      console.error('Google Apps Script error:', {
        status: response.status,
        statusText: response.statusText,
        body: responseText.substring(0, 500), // Limit log size
      })
      throw new Error(`Google Sheets API error: ${response.status} ${response.statusText}. ${responseText.substring(0, 100)}`)
    }
    
    // Try to parse as JSON
    let result
    try {
      result = JSON.parse(responseText)
    } catch (parseError) {
      console.error('Failed to parse response as JSON. Response:', responseText.substring(0, 500))
      throw new Error(`Invalid response from Google Sheets. Expected JSON but got: ${responseText.substring(0, 100)}`)
    }
    
    if (!result.success) {
      console.error('Google Apps Script returned error:', result)
      throw new Error(result.error || 'Failed to save data')
    }
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    // Provide more specific error message if available
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Failed to submit form. Please try again or email us directly.'
    
    // Log full error details for debugging
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name,
      })
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage.includes('GOOGLE_APPS_SCRIPT_WEBHOOK_URL') 
          ? 'Server configuration error. Please contact support.'
          : errorMessage.includes('Google Sheets')
          ? 'Unable to save to Google Sheets. Please try again or email us directly at harsha@thinkbyte.ai'
          : 'Failed to submit form. Please try again or email us directly at harsha@thinkbyte.ai'
      },
      { status: 500 }
    )
  }
}
