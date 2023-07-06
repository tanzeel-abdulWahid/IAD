import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Wallet from "./pages/wallet/Wallet";
import ConfirmEmail from "./pages/AuthPages/ConfirmEmail";
import CreatePassword from "./pages/AuthPages/CreatePassword";
import HomePage from "./pages/properties/HomePage";
import PhoneNumber from "./pages/AuthPages/PhoneNumber";
import SignUp from "./pages/AuthPages/SignUp";
import VerfiyPhone from "./pages/AuthPages/VerfiyPhone";
import Login from "./pages/AuthPages/Login";
import Portfolio from "./pages/portfolio/Portfolio";
import Cart from "./pages/cart/Cart";
import LandingPage from "./pages/LandingPage/LandingPage";
import PropertyDetails from "./pages/PropertyPage/PropertyDetails";
import ProfilePage from "./pages/Profile/Profile";
import Properties from "./pages/adminPanel/AdminProperties/Properties";
import AddProperty from "./pages/adminPanel/AdminProperties/AddProperty";
import PurchaseRequests from "./pages/adminPanel/PurchaseRequests/PurchaseRequests";
import UsersList from "./pages/adminPanel/users/UsersList";
import RentDetails from "./pages/adminPanel/rentDetails/RentDetails";
import BankDetails from "./pages/adminPanel/BankDetails/BankDetails";
import AddBank from "./pages/adminPanel/BankDetails/AddBank";
import { useSelector } from "react-redux";
import PrivateRoutes from "./components/utils/Privateroutes";
import Adminprivate from "./components/utils/Adminprivate";

function App() {
  return (
    <>
      {/* <VerfiyPhone /> */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirmEmail" element={<ConfirmEmail />} />
        <Route path="/createPassword" element={<CreatePassword />} />
        <Route path="/phNumber" element={<PhoneNumber />} />
        <Route path="/verifyNum" element={<VerfiyPhone />} />
        {/* Protected Routes */}
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/property/:propertyNumber"
            element={<PropertyDetails />}
          />
          <Route path="/profilePage" element={<ProfilePage />} />
        </Route>
        {/* Admin Panel pages */}
        <Route element={<Adminprivate />}>
          <Route path="/adminPanel" element={<Properties />} />
          <Route path="/adminPanel/addProperty" element={<AddProperty />} />
          <Route path="/moneyRequests" element={<PurchaseRequests />} />
          <Route path="/usersList" element={<UsersList />} />
          <Route path="/rentDetails" element={<RentDetails />} />
          <Route path="/bankDetails" element={<BankDetails />} />
          <Route path="/addBank" element={<AddBank />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
