---
layout: post
title:  "NYT COVID-19 Visualization"
date:   2020-04-25 20:00:00 -0500
categories: covid-19 data-viz
---
Ever since COVID-19 has started to hit the US, I've been interested in having a simple web app to track the increase in cases and deaths.  Last night I build just that using the NYT COVID-19 dataset and Plotly Dash.  The app allows users to trend cases and deaths.  Both can be plotted as accumulated values per day or by new values per day.  The data can be sorted by US, state, or by a few select counties amd the plot supports multiple series of data so users can easily compare across different groupings.

The app can be found [here](https://daoust-covid-viz.herokuapp.com/).
The source code can be found [here](https://github.com/andrewdaoust/covid-19) which is a fork of the [NYT repo](https://github.com/nytimes/covid-19-data) containing the data.