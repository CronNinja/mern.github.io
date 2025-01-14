let landingPage = [
  {
    name: "practice",
    html: {
      header: "Projects Page for Practice Projects",
      title: "Babysteps",
      text: "Second step is to challenge myself by making random projects when I am not working on my main weekly projects.",
      footer: "10/2/2021",
      buttons: [
        {
          link: "projects/practice.html",
          text: "Sample Projects",
          color: "primary",
          target: "_self"
        }
      ]
    }
  },
  {
    name: "mern",
    html: {
      header: "Projects Page for MIT xPro MERN Program",
      title: "Crawling",
      text: "First step to getting back into programming - the plan is to eat, code, and repeat for 6months ... and work I guess.",
      footer: "21/03/2021",
      buttons: [
        {
          link: "projects/",
          text: "xPro Projects",
          color: "primary",
          target: "_self"
        }
      ]
    }
  }
];

let projectPage = [
  {
    name: "bouncingBalls",
    html: {
      header: "Bouncing Balls",
      title: "Randomly Generated JS/HTML Ball Project",
      text: "This week's project was to use JS to move a ball(s) around an HTML DOM. I used an array of ball (objects) to track, and change the properties of the ball.",
      footer: "13 Jan 2021",
      buttons: [
        {
          link: "https://github.com/CronNinja/mern/blob/main/projects/balls",
          text: "Source Code",
          color: "primary",
          target: "_target"
        },
        {
          link: "balls/",
          text: "Demo",
          color: "success",
          target: "_target"
        }
      ]
    }
  },
  {
    name: "randomWalk",
    html: {
      header: "Herd Immunity Simulator",
      title: "Random Walk Process",
      text: "This week I created a herd immunity simulator but adding a random walk process to my code from last week. Blue - Zero Exposure, Yellow - Exposed, Green - Immuned, Black - Death.",
      footer: "20 Jan 2021",
      buttons: [
        {
          link: "https://github.com/CronNinja/mern/blob/main/projects/randomwalk",
          text: "Source Code",
          color: "primary",
          target: "_target"
        },
        {
          link: "randomwalk/",
          text: "Demo",
          color: "success",
          target: "_target"
        }
      ]
    }
  },
  {
    name: "bostonSalaries",
    html: {
      header: "Boston Salary Data",
      title: "",
      text: "Working with modules, to build out reable data. I hope to add clickable cells, sorting, and paging.",
      footer: "3 Feb 2021",
      buttons: [
        {
          link: "https://github.com/CronNinja/mern/blob/main/projects/bostonSalaries/",
          text: "Source Code",
          color: "primary",
          target: "_target"
        },
        {
          link: "bostonSalaries/",
          text: "Demo",
          color: "success",
          target: "_target"
        }
      ]
    }
  },
  {
    name: "portfolio",
    html: {
      header: "Modular Portfolio",
      title: "",
      text: "I made my whole portfolio modular.",
      footer: "10 Feb 2021",
      buttons: [
        {
          link: "https://github.com/CronNinja/mern/",
          text: "Source Code",
          color: "primary",
          target: "_target"
        }
      ]
    }
  },
  {
    name: "eyetracker",
    html: {
      header: "Eye Tracker",
      title: "",
      text: "Testing mouse tracking.",
      footer: "3 Mar 2021",
      buttons: [
        {
          link: "https://github.com/CronNinja/mern/eyetracker/",
          text: "Source Code",
          color: "primary",
          target: "_target"
        },
        {
          link: "eyetracker/",
          text: "Demo",
          color: "success",
          target: "_target"
        }
      ]
    }
  },
  {
    name: "pacMaker",
    html: {
      header: "PacMaker",
      text: "Going to make this project a staple of my portfolio by updating the code with better standards as I progress through the course.",
      footer: "Last Updated 21 March 2021",
      buttons: [
        {
          link: "https://github.com/CronNinja/mern/blob/main/projects/pacMaker/",
          text: "Source Code",
          color: "primary",
          target: "_target"
        },
        {
          link: "pacMaker/",
          text: "Demo",
          color: "success",
          target: "_target"
        }
      ]
    }
  },
  {
    name: "MBTA",
    html: {
      header: "MBTA",
      text: "Building out an MBTA bus tracking app",
      footer: "Last Updated 9 March 2021",
      buttons: [
        {
          link: "https://github.com/CronNinja/mern/blob/main/projects/mbta/",
          text: "Source Code",
          color: "primary",
          target: "_target"
        }
      ]
    }
  }
];

let practicePage = [
  {
    name: "tictactoe",
    html: {
      header: "TicTacToe",
      title: "",
      text: "Will add features to play against other people online in the future.",
      footer: "20 Jan 2021",
      buttons: [
        {
          link: "https://github.com/CronNinja/mern/blob/main/projects/tictactoe/",
          text: "Source Code",
          color: "primary",
          target: "_target"
        },
        {
          link: "tictactoe/",
          text: "Demo",
          color: "success",
          target: "_target"
        }
      ]
    }
  },
  {
    name: "studyGuide",
    html: {
      header: "Study Guide",
      title: "",
      text: "Modular build for based off my my daughters study data",
      footer: "9 Feb 2021",
      buttons: [
        {
          link: "https://github.com/CronNinja/mern/blob/main/projects/study/",
          text: "Source Code",
          color: "primary",
          target: "_target"
        },
        {
          link: "study/",
          text: "Demo",
          color: "success",
          target: "_target"
        }
      ]
    }
  }
];

let carousel = [{
  src: "../images/nhHike.jpg",
  alt: "NH Hike",
  title: "New Hampshire Hike",
  p: "Testing"
}];

export { landingPage, projectPage, practicePage, carousel }