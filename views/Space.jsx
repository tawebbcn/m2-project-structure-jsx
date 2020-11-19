const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function Space() {
  return (
    <Layout title="Home Page">
      <h1>Space View Page</h1>
      <Card
        text="smaller component example"
        image="https://i.imgur.com/OH7dtc0.png"
      />
      <Card
        text="second example of component use"
        image="https://i.imgur.com/dHdzhWn.png"
      />
    </Layout>
  );
}

module.exports = Space;