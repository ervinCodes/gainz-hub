module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },
    getAbout: (req, res) => {
      res.render("about.ejs");
    },
    getAddPostPage: (req, res) => {
      try {
        res.render("addPostPage.ejs")
      } catch (err) {
        console.log(err);
      }
    },
    getWorkoutsPage: (req, res) => {
      try { 
        res.render("workoutsPage.ejs");
      } catch (err) {
        console.log(err)
      }
    },
  };
  