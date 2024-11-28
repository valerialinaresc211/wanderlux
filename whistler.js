   function showMoreInfo(topic) {
      let message = "";
      switch (topic) {
        case 'skiing':
          message = "Whistler offers over 8,000 acres of terrain for skiing and snowboarding, with slopes suitable for all levels of skill. It's a year-round favorite for winter sports enthusiasts!";
          break;
        case 'summer':
          message = "In summer, Whistler becomes a playground for hikers and cyclists, offering scenic trails with views of mountains and lakes. The Peak 2 Peak gondola is a must-do for breathtaking panoramic views.";
          break;
        case 'village':
          message = "Whistler Village is a vibrant, pedestrian-only village with an array of restaurants, boutiques, and après-ski spots. It's the perfect place to relax after an adventurous day in the mountains.";
          break;
      }
      alert(message);
    }