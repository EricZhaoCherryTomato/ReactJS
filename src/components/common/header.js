"use strict";

var React = require('react');
var Routher = require('react-router');
var Link = Routher.Link;

var Header = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <a href="/" className="navbar-brand">
                <img src="images/pluralsight-logo.png" />
              </a>
              <ul className="nav navbar-nav">
                <li><Link to="app">Home</Link></li>
                <li><Link to="authors">Author</Link></li>
                <li><Link to="about">About</Link></li>
              </ul>
          </div>
        </nav>
		);
	}
});

module.exports = Header;