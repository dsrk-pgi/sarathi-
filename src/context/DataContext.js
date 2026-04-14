import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);
  const [bills, setBills] = useState([]);
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [docsData, billsData, medsData] = await Promise.all([
        AsyncStorage.getItem('documents'),
        AsyncStorage.getItem('bills'),
        AsyncStorage.getItem('medicines'),
      ]);

      if (docsData) setDocuments(JSON.parse(docsData));
      if (billsData) setBills(JSON.parse(billsData));
      if (medsData) setMedicines(JSON.parse(medsData));
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const saveData = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const addDocument = (doc) => {
    const newDocs = [...documents, { ...doc, id: Date.now().toString() }];
    setDocuments(newDocs);
    saveData('documents', newDocs);
  };

  const updateDocument = (id, updatedDoc) => {
    const newDocs = documents.map(doc => doc.id === id ? { ...doc, ...updatedDoc } : doc);
    setDocuments(newDocs);
    saveData('documents', newDocs);
  };

  const deleteDocument = (id) => {
    const newDocs = documents.filter(doc => doc.id !== id);
    setDocuments(newDocs);
    saveData('documents', newDocs);
  };

  const addBill = (bill) => {
    const newBills = [...bills, { ...bill, id: Date.now().toString() }];
    setBills(newBills);
    saveData('bills', newBills);
  };

  const updateBill = (id, updatedBill) => {
    const newBills = bills.map(bill => bill.id === id ? { ...bill, ...updatedBill } : bill);
    setBills(newBills);
    saveData('bills', newBills);
  };

  const deleteBill = (id) => {
    const newBills = bills.filter(bill => bill.id !== id);
    setBills(newBills);
    saveData('bills', newBills);
  };

  const addMedicine = (medicine) => {
    const newMeds = [...medicines, { ...medicine, id: Date.now().toString() }];
    setMedicines(newMeds);
    saveData('medicines', newMeds);
  };

  const updateMedicine = (id, updatedMed) => {
    const newMeds = medicines.map(med => med.id === id ? { ...med, ...updatedMed } : med);
    setMedicines(newMeds);
    saveData('medicines', newMeds);
  };

  const deleteMedicine = (id) => {
    const newMeds = medicines.filter(med => med.id !== id);
    setMedicines(newMeds);
    saveData('medicines', newMeds);
  };

  return (
    <DataContext.Provider
      value={{
        documents,
        bills,
        medicines,
        addDocument,
        updateDocument,
        deleteDocument,
        addBill,
        updateBill,
        deleteBill,
        addMedicine,
        updateMedicine,
        deleteMedicine,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
