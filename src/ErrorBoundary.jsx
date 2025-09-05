import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#fee',
          border: '1px solid #fcc',
          borderRadius: '8px',
          margin: '2rem',
          direction: 'rtl'
        }}>
          <h2>حدث خطأ في التطبيق</h2>
          <p>عذراً، حدث خطأ غير متوقع. يرجى إعادة تحميل الصفحة.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#007acc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            إعادة تحميل
          </button>
          <details style={{ marginTop: '1rem', textAlign: 'left' }}>
            <summary>تفاصيل الخطأ (للمطورين)</summary>
            <pre style={{ fontSize: '0.8rem', overflow: 'auto' }}>
              {this.state.error && this.state.error.toString()}
            </pre>
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
