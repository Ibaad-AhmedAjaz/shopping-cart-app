# Shopping Cart
A simple React-based shopping cart app where users can be added, edited, and deleted.

# 🚀 Live Demo
🔗 https://cart-app-shopping.netlify.app/

# ⚙️ Installation & Setup
1️⃣ Clone the Repository
- git clone https://github.com/Ibaad-AhmedAjaz/shopping-cart-app.git
- cd shopping-cart-app

2️⃣ Install Dependencies
- npm install

3️⃣ Run the App Locally
- npm run dev
Your app will be available at http://localhost:5173/ (This is the default port for Vite).

4️⃣ Build for Production
- npm run build
This generates a dist/ folder with optimized production files.

# ✨ Features
✅ Display a list of products
✅ Add products to the cart
✅ Update product quantity using + and - buttons
✅ Automatically add a free gift when subtotal ≥ ₹1000
✅ Progress bar showing how close the user is to the free gift
✅ Remove products from the cart (except the gift)
✅ Built with Vite for fast performance
✅ Fully managed using React’s built-in useState and useEffect
✅ Clean UI styled with CSS

# 📌 Deploying to GitHub & Netlify
1️⃣ Push the Project to GitHub

If your local branch is behind the remote branch, use:
- git pull origin main --rebase

Then, push your code:
- git push origin main

If you face issues, use a force push:
- git push --force origin main

2️⃣ Deploy on Netlify
If Netlify isn’t linking correctly, follow these steps:

Method 1: Using Netlify CLI
- npm run build
- netlify deploy --prod

Method 2: Manual Deployment
- 1️⃣ Go to Netlify Dashboard.
- 2️⃣ Click "Add a new site" → "Deploy manually".
- 3️⃣ Drag & drop the dist/ folder.

# ⚡ Challenges Faced
- Automatically adding and removing the free gift based on subtotal
- Keeping the gift item non-removable by the user
- Managing clean UI interactions and state transitions
- Ensuring no libraries or external packages are used

# 🚀 Future Improvements
🔹 Use React Context for better state separation
🔹 Add localStorage support to persist cart items
🔹 Improve accessibility and add animations
🔹 Write unit tests with Jest or React Testing Library

# 🤝 Contributing
Feel free to fork this repo and submit pull requests! 🚀

# 🛠 Author
👤 Ibaad Ahmed Ajaz
🔗 https://github.com/Ibaad-AhmedAjaz
