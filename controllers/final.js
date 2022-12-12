const getNewProducts = async (req, res) => {
    res.status(200).json({ msg: "Hi vivek Yadav you get it" });
};

const getNewProductsFinal = async (req, res) => {
    res.status(200).json({ msg: "Hi alok yadav tested" });
}


module.exports = { getNewProducts, getNewProductsFinal };