# حاسبة القواسم المشتركة

تطبيق ويب حديث مبني بـ React لحساب جميع القواسم المشتركة والقاسم المشترك الأكبر (ق.م.أ) لأرقام متعددة. مثالي للطلاب والمعلمين وأي شخص يعمل مع نظرية الأرقام.

## 🚀 المميزات

- **إدخال أرقام متعددة**: أدخل حتى 100+ رقم بسهولة
- **تنسيق إدخال مرن**: دعم للقيم المفصولة بمسافات أو فواصل
- **القواسم المشتركة**: اعثر على جميع القواسم المشتركة بين الأرقام المدخلة
- **إبراز القاسم المشترك الأكبر**: يعرض القاسم المشترك الأكبر بوضوح
- **تصميم متجاوب**: يعمل بشكل مثالي على الكمبيوتر والهاتف المحمول
- **معالجة الأخطاء**: تحقق شامل مع رسائل خطأ مفيدة
- **حساب فوري**: نتائج فورية مع خوارزميات محسنة

## 🔧 التقنيات المستخدمة

- **React 19** - مكتبة واجهة مستخدم حديثة
- **Vite** - أداة بناء وخادم تطوير سريع
- **CSS3** - تصميم مخصص مع تصميم متجاوب
- **JavaScript ES6+** - ميزات JavaScript الحديثة

## 📱 الاستخدام

1. أدخل أرقامك في منطقة النص (مفصولة بمسافات أو فواصل)
   - مثال: `12 18 24` أو `12، 18، 24`
2. انقر على "ابحث عن القواسم المشتركة" للحساب
3. اعرض جميع القواسم المشتركة المعروضة في شبكة منظمة
4. القاسم المشترك الأكبر (ق.م.أ) مبرز في الأسفل

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd GCD_Baba
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📊 Algorithm

The application uses an efficient algorithm to find common divisors:

1. **Divisor Finding**: For each number, finds all divisors up to √n
2. **Intersection**: Calculates the intersection of all divisor sets
3. **Sorting**: Results are sorted in descending order for easy reading

Time Complexity: O(n√m) where n is the number count and m is the largest number.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
