// RightPanel.jsx
const texts = [
    { 
      title: "Let's rent a bike to start your journey!",
      explanation: "Sign up to create a new account."
    },
    { 
      title: "Let's log in to your new account!",
      explanation: "Log in to explore bike routes, track your rides, and connect with the cycling community."
    },
    { 
      title: "Change or edit your profile now？",
      explanation: "Edit your profile details in the profile setting page."
    },
    { 
      title: "Where do you want to get your bike?",
      explanation: "Rent the bike from choosing your pickup point."
    },
    { 
      title: "Choose how many days to rent.",
      explanation: "Choose your date from the pop-up calendar before make the payment!"
    },
    { 
      title: "Pay with Razer Pay!",
      explanation: "Insert the amount and pay!"
    },
    { 
      title: "Ride your bike — Weather check active!",
      explanation: "Check the weather conditions before go out!"
    },    
    { 
      title: "Do you remember what bike have you rented？",
      explanation: "Check your history on MyBike page."
    },
                  
  ];
  
  function BikePanels({ activeStation }) {
    if (activeStation === null) {
        return (
          <div className="flex flex-col items-center justify-center flex-1 text-center">
            <h1 className="text-4xl font-bold mb-4">Select a station to start</h1>
          </div>
        );
      }
    
      const { title, explanation } = texts[activeStation];
    
      return (
        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-8">{explanation}</p>
        </div>
      );
 
  }
  
  export default BikePanels;
  