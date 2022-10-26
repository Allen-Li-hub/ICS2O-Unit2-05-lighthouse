// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Allen Li
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit2-05-lighthouse/sw.js", {
    scope: "/ICS2O-Unit2-05-lighthouse/",
  })
}

/**
 * This function displays an alert.
 */
function calculate() {
  const hours = parseInt(
    document.getElementById("number-of-hours-worked").value
  )
  const rate = parseInt(document.getElementById("hourly-rate").value)

  const take = hours * rate * 0.18
  const wage = hours * rate * (1.0 - 0.18)

  document.getElementById("take").innerHTML =
    "The governemnt will take: " + take + "$"
  document.getElementById("wage").innerHTML = "your pay will be: " + wage + "$"
}
