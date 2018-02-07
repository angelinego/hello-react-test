import React, { Component } from "react"
import "./App.css"

import Profile from "./components/Profile"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">ROLEMOD</h1>
          <p className="App-intro">Who's Your Role Model?</p>
        </header>
        <div className="container">
          <Profile
            image="/images/Masayoshi_son.jpg"
            name="Masayoshi Son "
            bio="Investor/Entrepreneur/Philantropist"
            description="Son is the founder and largest shareholder of SoftBank, a Japanese mobile phone and investment group. The Tokyo-based company owns stakes in more than 1,000 businesses, including Yahoo Japan and Alibaba. It has more than 68,000 employees and reported revenue of 8.9 trillion yen ($82 billion) in the year to March 31, 2017."
          />
          <Profile
            image="/images/jeffbezos.jpg"
            name="Jeff Bezos " bio="Investor/Entrepreneur/Philantropist"
            description="Jeff Bezos is the founder and chief executive officer of Amazon.com and owner of 'The Washington Post.' On July 27, 2017, he became the world's wealthiest person with an estimated net worth of just over $90 billion according to Forbes Magazine. His net worth surpassed $100 billion for the first time on November 24, 2017, after Amazon's share price increased by more than 2.5%. As of February 2, 2018, he is worth $118.8 billion, and is contended to be on track to become the wealthiest person in modern history."
          />
          <Profile
            image="/images/elon_musk.jpg"
            name="Elon Musk " bio="Entrepreneur/Visionary"
            description="Elon Reeve Musk is a South African-born American entrepreneur and businessman who founded X.com in 1999 (which later became PayPal), SpaceX in 2002 and Tesla Motors in 2003. Musk became a multimillionaire in his late 20s when he sold his start-up company, Zip2, to a division of Compaq Computers."
            />
        </div>
      </div>
    )
  }
}
