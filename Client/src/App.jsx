import React from "react";
import { UserProvider } from "./Context/UserContext";
import { ThirdPartiesProvider } from "./Context/ThirdPartiesContext";
import { CategoryProvider } from "./Context/CategoryContext";
import { AuthProvider } from "./Context/AuthContext";
import HandleRoutes from "./handleRoutes";
import { InventaryProvider } from "./Context/InventaryContext";
import { PurchaseProvider } from "./Context/PurchaseContext";

function App() {

  return (
    <>
      <AuthProvider>
        <UserProvider>
          <PurchaseProvider>
            <InventaryProvider>
              <CategoryProvider>
                <ThirdPartiesProvider>
                  <HandleRoutes/>
                </ThirdPartiesProvider>
              </CategoryProvider>
            </InventaryProvider>
          </PurchaseProvider>
        </UserProvider>
      </AuthProvider>
    </>
  )
}

export default App
