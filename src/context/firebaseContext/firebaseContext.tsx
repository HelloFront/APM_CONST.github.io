import { createContext, useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";

import { db } from "../../firebase/config";

const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
  const [services, setServices] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);

  const servicesCollectionRef = collection(db, "projects");
  const projectsCollectionRef = collection(db, "all_projects");

  useEffect(() => {
    const getServicesList = async () => {
      try {
        const data = await getDocs(servicesCollectionRef);
        const fillteredData = data.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));

        setServices(fillteredData);
      } catch (error) {
        console.log(error);
      }
    };

    const getProjectsList = async () => {
      try {
        const data = await getDocs(projectsCollectionRef);
        const fillteredData = data.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProjects(fillteredData);
      } catch (error) {
        console.log(error);
      }
    };

    getProjectsList();
    getServicesList();
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        services,
        projects,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
