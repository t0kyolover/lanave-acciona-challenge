const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        titles: ["Home", "View1", "View2"]
      },
  
      actions: {
        loadSomeData: () => {
            console.log("Testing from flux")
        }, 
      },
    };
  };
  
  export default getState;