````markdown
# 🚀 Custom React Form with Zod Validation

A simple yet powerful React form component built using [react-hook-form](https://react-hook-form.com/) and [Zod](https://github.com/colinhacks/zod) for schema validation. This project demonstrates how to create a reusable form with built-in validation and error handling using modern React practices.

## 🌟 Features

- **Custom Form Components**: Easily create and manage form inputs with reusable components.
- **Zod Schema Validation**: Enforce data integrity with a robust, type-safe validation layer.
- **Error Handling**: Automatically display validation errors next to each input.
- **Modular Design**: Organized code structure for maintainability and scalability.

## 🛠️ Built With

- **React** ⚛️: A JavaScript library for building user interfaces.
- **react-hook-form**: Manage form state effortlessly using hooks.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **CSS** 🎨: Simple styling for a clean and responsive UI.

## 📥 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or above recommended)
- npm or yarn package manager

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/custom-react-form.git
   cd custom-react-form
   ```
````

2. **Install Dependencies:**

   ```bash
   npm install
   # or if you prefer yarn:
   yarn install
   ```

### ▶️ Running the Application

Start the development server with:

```bash
npm start
# or with yarn:
yarn start
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## 📂 Project Structure

```plaintext
custom-react-form/
├── src/
│   ├── components/
│   │   ├── CustomForm/
│   │   │   └── CustomForm.tsx
│   │   └── CustomInput/
│   │       └── CustomInput.tsx
│   ├── models/
│   │   └── index.ts       # Contains form schema and type definitions
│   ├── App.css
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

## 🔍 How It Works

- **App Component (`App.tsx`)**  
  Serves as the entry point of the application, rendering the `CustomForm` component.

- **CustomForm Component (`CustomForm.tsx`)**  
  Utilizes `react-hook-form` with a Zod resolver to manage form state and validate inputs for fields such as name, email, password, and confirm password. Upon submission, the form data is logged to the console.

- **CustomInput Component (`CustomInput.tsx`)**  
  A reusable input component that integrates with `react-hook-form` via the `Controller` component, rendering each input with error feedback if validation fails.

## ⚙️ Customization

- **Schema Validation**:  
  Modify the schema in `models/index.ts` to adjust validation rules as per your project requirements.

- **Styling**:  
  Update the CSS files (`App.css` and `CustomInput.css`) to customize the look and feel of your form.

- **Adding New Fields**:  
  Extend the form by adding more `InputForm` components in `CustomForm.tsx`, following the established pattern.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and open a pull request with your enhancements or bug fixes.

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more details.

## 📫 Contact

- **Your Name** - [anthonyfabian212@gmail.com](mailto:your-email@example.com)
- **Project Link**: [https://github.com/Atch2/cpReact/tree/main/anthonyForm](https://github.com/your-username/custom-react-form)

```

```
