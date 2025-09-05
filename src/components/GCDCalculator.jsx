import { useState } from 'react'
import './GCDCalculator.css'

const GCDCalculator = () => {
  const [numbers, setNumbers] = useState('')
  const [commonDivisors, setCommonDivisors] = useState([])
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState('')

  // Function to find all divisors of a number
  const findDivisors = (num) => {
    const divisors = []
    const absNum = Math.abs(num)
    
    for (let i = 1; i <= Math.sqrt(absNum); i++) {
      if (absNum % i === 0) {
        divisors.push(i)
        if (i !== absNum / i) {
          divisors.push(absNum / i)
        }
      }
    }
    
    return divisors.sort((a, b) => a - b)
  }

  // Function to find common divisors of multiple numbers
  const findCommonDivisors = (numberArray) => {
    if (numberArray.length === 0) return []
    
    // Get divisors for the first number
    let common = findDivisors(numberArray[0])
    
    // Find intersection with divisors of remaining numbers
    for (let i = 1; i < numberArray.length; i++) {
      const currentDivisors = findDivisors(numberArray[i])
      common = common.filter(divisor => currentDivisors.includes(divisor))
    }
    
    return common.sort((a, b) => b - a) // Sort in descending order
  }

  const handleCalculate = () => {
    setError('')
    setIsCalculating(true)
    
    try {
      // Parse numbers from input
      const numberArray = numbers
        .split(/[\s,]+/) // Split by spaces or commas
        .map(str => str.trim())
        .filter(str => str !== '')
        .map(str => {
          const num = parseFloat(str)
          if (isNaN(num) || !Number.isInteger(num)) {
            throw new Error(`"${str}" ليس رقماً صحيحاً صالحاً`)
          }
          if (num === 0) {
            throw new Error('الصفر غير مسموح (له قواسم لا نهائية)')
          }
          return num
        })

      if (numberArray.length === 0) {
        throw new Error('يرجى إدخال رقم واحد على الأقل')
      }

      if (numberArray.length === 1) {
        setError('يرجى إدخال رقمين على الأقل للعثور على القواسم المشتركة')
        setIsCalculating(false)
        return
      }

      // Calculate common divisors
      const result = findCommonDivisors(numberArray)
      setCommonDivisors(result)
      
    } catch (err) {
      setError(err.message)
      setCommonDivisors([])
    }
    
    setIsCalculating(false)
  }

  const handleClear = () => {
    setNumbers('')
    setCommonDivisors([])
    setError('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate()
    }
  }

  return (
    <div className="gcd-calculator">
      <div className="input-section">
        <label htmlFor="numbers-input">
          أدخل الأرقام (مفصولة بمسافات أو فواصل):
        </label>
        <textarea
          id="numbers-input"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="مثال: 12 18 24 أو 12، 18، 24"
          className="numbers-input"
          rows={4}
        />
        
        <div className="buttons">
          <button 
            onClick={handleCalculate}
            disabled={isCalculating || !numbers.trim()}
            className="calculate-btn"
          >
            {isCalculating ? 'جاري الحساب...' : 'ابحث عن القواسم المشتركة'}
          </button>
          <button 
            onClick={handleClear}
            className="clear-btn"
          >
            مسح
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <strong>خطأ:</strong> {error}
        </div>
      )}

      {commonDivisors.length > 0 && (
        <div className="results-section">
          <h3>القواسم المشتركة</h3>
          <p className="result-info">
            تم العثور على {commonDivisors.length} قاسم مشترك{commonDivisors.length !== 1 ? '' : ''}:
          </p>
          <div className="divisors-grid">
            {commonDivisors.map((divisor, index) => (
              <span key={index} className="divisor-item">
                {divisor}
              </span>
            ))}
          </div>
          <div className="gcd-highlight">
            <strong>القاسم المشترك الأكبر: {commonDivisors[0]}</strong>
          </div>
        </div>
      )}
    </div>
  )
}

export default GCDCalculator
