import React from 'react'

// Simple test component to verify React is working
function TestApp() {
  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      direction: 'rtl',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#333', marginBottom: '1rem' }}>
        🧪 اختبار التطبيق
      </h1>
      <p style={{ color: '#666', fontSize: '1.2rem' }}>
        إذا كنت ترى هذه الرسالة، فإن React يعمل بشكل صحيح!
      </p>
      <div style={{
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '8px',
        marginTop: '2rem',
        border: '1px solid #ddd'
      }}>
        <p>تاريخ ووقت التحميل: {new Date().toLocaleString('ar')}</p>
      </div>
    </div>
  )
}

export default TestApp
