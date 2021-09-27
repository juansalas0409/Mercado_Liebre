const mainController= {
    home: (req, res) => {
    return res.render('home');
    },
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login');
    }
}

module.exports = mainController