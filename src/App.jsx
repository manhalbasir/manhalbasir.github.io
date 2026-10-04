import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import { site } from "./data/site";
import Home from "./pages/Home";
import AppPage from "./pages/AppPage";
import Privacy from "./pages/Privacy";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <header className="nav">
        <NavLink to="/" className="brand">{site.name}</NavLink>
        <nav>
          <NavLink to="/">التطبيقات</NavLink>
          <NavLink to="/portfolio">أعمالنا</NavLink>
          <NavLink to="/about">من نحن</NavLink>
          <NavLink to="/contact">تواصل معنا</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app/:id" element={<AppPage />} />
          <Route path="/privacy/:id" element={<Privacy />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<p>الصفحة غير موجودة</p>} />
        </Routes>
      </main>
      <footer>© {new Date().getFullYear()} {site.name} · {site.email}</footer>
    </HashRouter>
  );
}
