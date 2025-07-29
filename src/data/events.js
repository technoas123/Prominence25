const events = [
    {
      id: 1,
      title: "Prominence",
      description:
        "The annual tech fest of ECE & Robotics, RIT Kottayam, is back with a bang!",
      content: "🚀 Get Ready for Prominence 25! 🚀 The annual tech fest of ECE & Robotics, RIT Kottayam, is back with a bang! Prominence 25 is set to ignite innovation, challenge minds, and showcase cutting-edge technology. Stay tuned for thrilling competitions, workshops, and tech exhibitions that will push the boundaries of creativity.",
      image: "/images/event0.jpg",
      date: "March 06, 2025",
      location: "Main Auditorium",
      link: "#",
    },
    {
      id: 2,
      title: "Prominence Launch",
      description:
        "The Department of ECE & Robotics presents Prominence 2025, the festival of innovation and creativity where ideas becomes reality",
        content: "For a succesful technology, reality must take precedence over  relations, for Nature cannot be fooled. The Department of ECE & Robotics presents Prominence 2025, the festival of innovation and creativity where ideas becomes reality. Discover innovative ideas, connect with passionate minds, and create unforgettable experiences✨. Join us on 6th and 7th of March 2025. Save the dates and stay tuned for more updates...!",
      image: "/images/event1.jpg",
      date: "March 06, 2025",
      location: "Main Auditorium",
      link: "#",
    },
    {
      id: 3,
      title: "Bonic Expo",
      description:
        "Get ready for the ultimate tech and innovation showcase at PROMINENCE 2025",
      content: "The Department of ECE & ROBOTICS presents Bonic Expo,a project expo competition in association with Bonic.ai  🏣Venue: RIT KOTTAYAM  📅Date: 06/03/2025 💰Exciting prizes up for grabs, including a free ticket to Dubai. Register here 🔴Registration is free and open to all.",
      image: "/images/event2.jpg",
      date: "March 06, 2025",
      location: "Main Auditorium",
      link: "https://forms.gle/rhu2QiCWwoenyah58",
    },
    {
      id: 4,
      title: "Gerena FreeFire Tournament",
      description:
        "The Gerena FreeFire Tournament, powered by Prominence'25 in collaboration with Gamers Spot RIT, is here to test your skills and crown the ultimate champion.",
      content: "The Garena FreeFire Tournament, powered by Prominence'25 in collaboration with Gamers Spot RIT, is here to test your skills and crown the ultimate champion. 🔸️Date: 25/02/2025 🔸️Team Structure: 4 Members  🔸️Game Mode: Battle Royale 🔸️Registration Fee: ₹80 per team  Win a full manthi feast to crown your victory 🏆 Sign up now🚀",
      image: "/images/event3.jpg",
      date: "February 25, 2025",
      location: "Online",
      link: "https://forms.gle/ytdn3Y7tGSBBg2dGA",
    },
    {
      id: 5,
      title: "PUBG Tournament",
      description:
        "Take aim, stay sharp, and battle your way to the top—Welcome to PUBG Tournament💣",
      content:"Take aim, stay sharp, and battle your way to the top—Welcome to  Player Unknown BattleGround Tournament💣.Hosted by Prominence'25 in collaboration with Gamers Spot RIT. 🔸️Date: 26/02/2025 🔸️Team Structure: 4 Members  🔸️Game Mode: Team Death Match 🔸️Registration Fee: ₹50 per team Win a full manthi feast to crown your victory 🏆",
      image: "/images/event4.jpg",
      date: "February 26, 2025",
      location: "Online",
      link: "https://forms.gle/Cda6K6YyHwUUXiALA",
    },
    {
      id: 6,
      title: "Mini Miltia Tournament",
      description:
        "Unleash Mayhem, Ignite Strategy Welcome to the World of Mini Militia, Face off with top players, prove your skills, and get your hands on some epic prizes",
      content:"Unleash Mayhem, Ignite Strategy Welcome to the World of Mini Militia🥷Join the Mini Miltia Tournament, brought to you by Prominence'25 in partnership with Gamers Spot RIT. 🔸️Date: 27/02/2025 🔸️Team Structure: 4 Members  🔸️Mode: Offline @ College Auditorium  🔸️Registration Fee: ₹40 per team Win a full manthi feast to crown your victory 🏆",
      image: "/images/event5.jpg",
      date: "February 27, 2025",
      location: "College Auditorium",
      link: "https://forms.gle/hUb2p1fBN4Wtg2qm6",
    },
    {
      id: 7,
      title: "e-Football Tournament",
      description:
        "Kick off your journey to virtual football glory in the e-Football Championship ⚽.Hosted by Prominence'25 and Gamers Spot RIT.",
      content:"Kick off your journey to virtual football glory in the e-Football Championship ⚽.Hosted by Prominence'25 and Gamers Spot RIT. 🔸️Date: 28/02/2025 🔸️Game Mode: Online 🔸️Registration Fee: ₹30 per head Win a full manthi feast to crown your victory 🏆",
      image: "/images/event6.jpg",
      date: "February 28, 2025",
      location: "Online",
      link: "https://forms.gle/H1g9W3m99WQp82gU8",
    },
    {
      id: 8,
      title: "Technical Paper Presentation",
      description:
        "The Association of Electronics and Communication Engineering & Robotics and Artificial Intelligence invites you to an insightful Technical Paper Presentation",
      content:"The Association of Electronics and Communication Engineering & Robotics and Artificial Intelligence invites you to an insightful Technical Paper Presentation. 📌Date: 03/03/2025 📌Venue:Seminar Hall 📌Guidelines are provided in the poster above. 📌Attendance will be provided to all participants.  🏆Stand a chance to win from a prize pool of ₹1500. This is your chance to stay ahead in the field of technology .Do not miss this enriching experience. Secure your place now ",
      image: "/images/event7.jpg",
      date: "March 03, 2025",
      location: "ECE Seminar Hall",
      link: "https://forms.gle/joiKS5xECCNGyhJM8",
    },
    {
      id: 9,
      title: "Python Quiz",
      description:
        "🐍PROMINENCE 25 Presents: The Python Quiz Challenge! 🐍",
      content:"🐍PROMINENCE 25 Presents: The Python Quiz Challenge! 🐍 Department of Electronics and Communication Engineering & Robotics and Artificial Intelligence brings you PYTHON QUIZ CHALLENGE! Are you well-versed in the world of coding? Put your knowledge, logic, and skills to the test in the ultimate Python competition!  🔹Date: 5th March 2025 📍Venue : Seminar Hall ✅ Attendance will be provided to all participants 🏆 Win a prize pool worth ₹1000! 📌 Check the poster for guidelines ",
      image: "/images/event8.jpg",
      date: "March 05, 2025",
      location: "ECE Seminar Hall",
      link: "https://forms.gle/EVGEZUr1hKXuo7TW6",
    },
    {
      id: 10,
      title: "Makethon",
      description:
        "As part of PROMINENCE'25, The Electronics & Communication Engineering and Robotics & AI departments present Makethon—a challenge that puts your creativity, problem-solving, and innovation to the test under pressure!",
      content:"As part of PROMINENCE'25, The Electronics & Communication Engineering and Robotics & AI departments present Makethon—a challenge that puts your creativity, problem-solving, and innovation to the test under pressure! 🗓 Date :  4th March 2025 ✅ Attendance will be provided to all participants 🏆 Prize Pool: ₹3000 📌 Check the poster for guidelines",
      image: "/images/event9.jpg",
      date: "March 04, 2025",
      location: "ECE Seminar Hall",
      link: "https://forms.gle/huk9TwxmRoYF8hFL9",
    },
    {
      id: 11,
      title: "Carroms Tournament",
      description:
        "PROMINENCE 25 is hosting a Carroms Tournament, and it is time to give your best shot.In the game of carroms, every shot is a mix of skill, strategy, and a little bit of luck✨",
      content:"PROMINENCE 25 is hosting a Carroms Tournament, and it is time to give your best shot.In the game of carroms, every shot is a mix of skill, strategy, and a little bit of luck✨ 🏣Venue:Auditorium  📅Date: 05/03/2025 🔴Registration Fee:₹40 per team 🏆Stand a chance to win from a prize pool of ₹500 🟥Do not miss out! Find all the rules and guidelines on our above post",
      image: "/images/event10.jpg",
      date: "March 05, 2025",
      location: "Auditorium",
      link: "https://forms.gle/gqha1XNeR5aKNtLo9",
    },
    {
      id: 12,
      title: "Basketball Tournament",
      description:
        "Prominence invites you to the Layups Basketball Tournament,a grand celebration of passion, skill, and the love of the game",
      content: "Are you ready to showcase your basketball mastery and compete with the best? Prominence invites you to the Layups Basketball Tournament,a grand celebration of passion, skill, and the love of the game🎊. Join us on March 7th for an amazing experience✨ 📌Register now for ₹𝟱𝟬𝟬 per 𝘁𝗲𝗮𝗺. 💰Bring your A-game and take a shot at the epic ₹4000 prize pool. ",
      image: "/images/event11.jpg",
      date: "March 07, 2025",
      location: "Basketball Court",
      link: "https://forms.gle/p9K44Ki4rGQmMvN8A",
    },
    {
      id: 13,
      title: " 3D Printing Workshop",
      description:
        "The Association of ECE & RAI invites you to join a hands-on 3D Printing Workshop and experience the perfect blend of learning and creativity. ",
      content: "The Association of ECE & RAI invites you to join a hands-on 3D Printing Workshop and experience the perfect blend of learning and creativity.\n \n🔹Time: 10:00 AM \n🔹Speaker: Sabari K Namboothiri (S7 MECH) \n🔹Entry Fee: ₹10/- \n\n Unlock your creative potential and dive into the world of 3D printing. Register today and join us for an insightful session. \n",
      image: "/images/event12.jpg",
      date: "July 29, 2025",
      location: "ECE Project Room",
      link: "https://forms.gle/vuLoms9ywFwzrsmN9",
    },
    {
      id: 14,
      title: " Gaming Room",
      description:
        "Kick off your journey to virtual gaming glory in the 𝐆𝐀𝐌𝐈𝐍𝐆 𝐀𝐑𝐂𝐀𝐃𝐄 hosted by Prominence'25 in collaboration with Gamers Spot RIT🎮⚽ ",
      content: "Kick off your journey to virtual gaming glory in the 𝐆𝐀𝐌𝐈𝐍𝐆 𝐀𝐑𝐂𝐀𝐃𝐄 hosted by Prominence'25 in collaboration with Gamers Spot RIT🎮⚽",
      image: "/images/event13.jpg",
      date: "July 29, 2025",
      location: "ECE 302",
      link: "https://www.instagram.com/p/DMmfRqnBU2L/?igsh=MXF4ZDJteHQxZ3JqMA==",
    },
    {
      id: 15,
      title: " FIGMA Workshop",
      description:
        "Don't miss the Figma Workshop presented by Prominence'25. Dive into the world of UI/UX and learn to design like a pro.",
      content: "Calling all aspiring designers 🎉 \n Don't miss the Figma Workshop presented by Prominence'25. Dive into the world of UI/UX and learn to design like a pro. \n🔸 Speaker:- R Harikrishnan \n🔸 Time:- 2pm \n Your design journey starts here🌟",
      image: "/images/event14.jpg",
      date: "July 29, 2025",
      location: "ECE Computer Lab",
      link: "https://forms.gle/DAGTvct8Gmq5UHZ2A",
    },
     {
      id: 16,
      title: " I-Hub Robotics ",
      description:
        " Prominence'25 is thrilled to welcome i HUB ROBOTICS as our official Expo Partner, bringing their incredible lineup including TARA Semi Humanoid, Go-2, AMAB Bot, Robotic Arm, and VR Headset ",
      content: " 1Prominence'25 is thrilled to welcome i HUB ROBOTICS as our official Expo Partner, bringing their incredible lineup including TARA Semi Humanoid, Go-2, AMAB Bot, Robotic Arm, and VR Headset ",
      image: "/images/event16.jpg",
      date: "July 29, 2025",
      location: "ECE Department ",
      link: " https://www.instagram.com/p/DMm_4Y6hVEM/?igsh=MTczdm4yZTRrN3JlYQ== ",
     }, 
     {
      id: 17,
      title: " 2 Days To GO! ",
      description:
        " We’re almost there🥳🚀 Only 2 Days Left for Prominence’25. Prominence is happening this July 29th, and it’s going to be a day full of ideas, energy, and amazing people. Don’t miss the chance to be part of something exciting and inspiring...! ",
      content: " We’re almost there🥳🚀 Only 2 Days Left for Prominence’25. Prominence is happening this July 29th, and it’s going to be a day full of ideas, energy, and amazing people. Don’t miss the chance to be part of something exciting and inspiring...! ",
      image: "/images/event15.jpg",
      date: "July 29, 2025",
      location: "ECE Department ",
      link: " https://www.instagram.com/p/DMnTrE-BXVp/?igsh=ZGJjNTdwb2Mzbjk2 ",
<<<<<<< HEAD
     },
     {
      id: 18,
      title: " Score big⚽! ",
      description:
        "Prominence’25 in collaboration with Gamer's Spot RIT, present a thrilling FIFA Tournament as part of Gaming Arcade ",
      content: " Score big⚽ Prominence’25 in collaboration with Gamer's Spot RIT, present a thrilling FIFA Tournament as part of Gaming Arcade. \n Spot Registration :-₹10 per head \n Win exciting cash prizes and claim your glory. Don't miss out✨ ",
      image: "/images/event17.jpg",
      date: "July 29, 2025",
      location: "ECE 302 ",
      link: " https://www.instagram.com/p/DMnTrE-BXVp/?igsh=ZGJjNTdwb2Mzbjk2 ",
     },
     {
      id: 19,
      title: " Get ready to race🏎 ",
      description:
        " The  Association of ECE and RAI presents Gaming Arcade in collaboration with Gamer's Spot RIT. Dominate the Forza Horizon Leaderboard, win exciting cash prizes, and show off your skills. ",
      content: " Get ready to race🏎 \n The  Association of ECE and RAI presents Gaming Arcade in collaboration with Gamer's Spot RIT. Dominate the Forza Horizon Leaderboard, win exciting cash prizes, and show off your skills. \n 🎟 Spot Registration: ₹10 per head ",
      image: "/images/event18.jpg",
      date: "July 29, 2025",
      location: "ECE 302 ",
      link: " https://www.instagram.com/p/DMnTrE-BXVp/?igsh=ZGJjNTdwb2Mzbjk2 ",
     },
     {
      id: 20,
      title: " 🎶 Get ready to groove🎶 ",
      description:
        " Prominence’25 is turning up the volume with a live performance by 𝐑𝐈𝐓𝐌! 💃🥳 ",
      content: " 🎶 Get ready to groove🎶 \n Prominence’25 is turning up the volume with a live performance by 𝐑𝐈𝐓𝐌! 💃🥳 \n 🕕 Time: 6:00 PM \n Brace yourselves for a night filled with music, energy, and pure good vibes. ✨ \n Let the rhythm take over...! ",
      image: "/images/event19.jpg",
      date: "July 29, 2025",
      location: "ECE Department ",
      link: " https://www.instagram.com/p/DMnTrE-BXVp/?igsh=ZGJjNTdwb2Mzbjk2 ",
     },
     {
      id: 21,
      title: " 🌟 IDEATHON @ PROMINENCE TECHFEST 2025 🌟 by IEDC RIT! ",
      description:
        " Got a game-changing idea? Bring it to life at our IDEATHON, where innovation meets opportunity! Pitch your solution, get mentored, and compete for prizes.Take the first step toward transforming your idea into impact! 🚀 ",
      content: " 🌟 IDEATHON @ PROMINENCE TECHFEST 2025 🌟 by IEDC RIT! \n Got a game-changing idea? Bring it to life at our IDEATHON, where innovation meets opportunity! Pitch your solution, get mentored, and compete for prizes.Take the first step toward transforming your idea into impact! 🚀 \n ⏰ Time : 4 to 5 PM \n 👥 Team Size: 1–5 members \n 🎯 Themes: Tech, Sustainability, Healthcare, Education & more \n 🏆 Prizes, certificates & mentorship \n 📌Register Now \n ☎For queries contact: \n Gangothri:+918078116828 \n Basil: +918921485904 \n Mariya:+916238679574 ",
      image: "/images/event20.jpg",
      date: "July 29, 2025",
      location: "ECE Department ",
      link: " https://forms.gle/p44swWg9EkUpvhEU9 ",
     },
     {
      id: 22,
      title: " 1 Day to GO! ",
      description:
        " See you Tommorrow ",
      image: "/images/event21.jpg",
      date: "July 29, 2025",
      location: "ECE Department ",
      link: " ## ",
     },
     {
      id: 23,
      title: " Step Into the LASER ROOM ",
      description:
        " ✨ Immerse yourself in a thrilling maze of lasers — 💡 Dodge the beams, feel the vibe, and enjoy the experience! ",
      content: " 🔴 Step Into the LASER ROOM 🔴 Brought to you by PROMINENCE’25 \n Association of ECE and RAI \n ✨ Immerse yourself in a thrilling maze of lasers — 💡 Dodge the beams, feel the vibe, and enjoy the experience! \n 🎭 Fun | Lights | Photo Moments \n ⚠ Touch the light… and it’s game over! \n 📸 Capture the thrill, share the fun! \n 🎉 Whether you're in it for the adventure or just the aesthetic — \n The Laser Room is the perfect stop! ",
      image: "/images/event24.jpg",
      date: "July 29, 2025",
      location: "ECE 302 ",
      link: " ## ",
     },
     {
      id: 24,
      title: " 🕵‍♂ SCAVENGER HUNT BY PROMINENCE 🕵‍♀ Are you ready to explore, solve, and WIN? 🔍✨ ",
      description:
        " Prominence presents an epic 10-stop solo treasure hunt across campus! Find clues, scan hidden QR codes, and uncover secrets from iHub to the Stairs! 👣🧩 ",
      content: " 🕵‍♂ SCAVENGER HUNT BY PROMINENCE 🕵‍♀ \n Are you ready to explore, solve, and WIN? 🔍✨ \n Prominence presents an epic 10-stop solo treasure hunt across campus! \n Find clues, scan hidden QR codes, and uncover secrets from iHub to the Stairs! 👣🧩 \n 🎁 Prize: A mouth-watering Quarter Manthi awaits the sharpest sleuth! \n 📍 Start Point: Check the Actionbound app & follow the trail! \n 🕑 No Time Limit — but speed might just make you the winner 😉 \n 🚨 Finish the bound, and we’ll contact the winner directly! \n So grab your phone, trust your instincts, and let the hunt begin! ",
      image: "/images/event23.jpg",
      date: "July 29, 2025",
      location: "ECE Department ",
      link: " https://www.instagram.com/p/DMrZvnnh-jS/?igsh=d3dwMmJlMThzemZm ",
     }
];

export default events;
