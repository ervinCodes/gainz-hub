module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },
    getAbout: (req, res) => {
      try {
        res.render("about.ejs");
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    },
  };
  