var Client = function (e) { var t = {}; function n(o) { if (t[o]) return t[o].exports; var a = t[o] = { i: o, l: !1, exports: {} }; return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports } return n.m = e, n.c = t, n.d = function (e, t, o) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o }) }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var o = Object.create(null); if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var a in e) n.d(o, a, function (t) { return e[t] }.bind(null, a)); return o }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 7) }([function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { "use strict"; n.r(t), n.d(t, "Action", (function () { return i })), n.d(t, "ValidCity", (function () { return r })), n.d(t, "aboutCountry", (function () { return m })); const o = "http://api.weatherbit.io/v2.0/forecast/daily?"; var a; const c = document.getElementById("error"); function r() { const e = document.getElementById("city"), t = e.value; "" == t ? (e.setAttribute("placeholder", "This cannot be empty"), e.style.border = "2px solid #f00") : (e.style.border = "none", function (e) { const t = document.getElementById("date").value; let n = (new Date).getTime(), a = new Date(t).getTime(), r = Math.floor((a - n) / 864e5); console.log(r), isNaN(r) ? (c.style.display = "block", c.innerHTML = "Please select the right a date") : r < 0 ? (c.style.display = "block", c.innerHTML = "please select a date after today") : r <= 7 ? (c.style.display = "none", i(e, "http://api.weatherbit.io/v2.0/current?", r)) : r > 7 && (c.style.display = "none", i(e, o, r)) }(t)) } function i(e, t, n) { s("http://api.geonames.org/searchJSON?q=", e, "&username=marina_khamis01").then(r => { if (0 === r.totalResultsCount) c.innerHTML = "The City You entered doesn't exist", c.style.cssText = "display:block; color:#f00; background:#fff"; else { let c = "&lat=" + r.geonames[0].lat, i = "&lon=" + r.geonames[0].lng, s = "" + r.geonames[0].countryName; u(t, c, i, "&key=1b147acc16f544829e69f7c1912e481e").then(c => { console.log(t), console.log(c), "http://api.weatherbit.io/v2.0/current?" == t && (a = { city: c.data[0].city_name, country: s, date: n, temp: c.data[0].app_temp, sky: c.data[0].weather.description }), t == o && n <= 15 && (a = { city: c.city_name, country: s, date: n, temp: c.data[n].temp, sky: c.data[n].weather.description }), t == o && n >= 16 && (a = { city: c.city_name, country: s, date: n, temp: c.data[15].temp, sky: c.data[15].weather.description }), console.log(c), d("http://localhost:8080/Post", a).then(y("https://pixabay.com/api/?", "&key=17320412-aafc57edd6a634e85b44869fb&q=", e)).then(l("https://restcountries.eu/rest/v2/name/", s)).then(() => { f() }) }) } }) } document.addEventListener("DOMContentLoaded", () => { document.getElementById("generate").addEventListener("click", r) }); const l = async (e, t) => { const n = await fetch(e + t); console.log(n); try { const e = await n.json(); console.log(e), document.getElementById("title").innerHTML = "About " + t, document.getElementById("about-country").innerHTML = ` ${e[0].name} is The official name,\n        The capital of which is ${e[0].capital}.\n        ${e[0].languages[0].name} is the native language.`; let o = document.getElementById("flag"); o.style.display = "block", o.src = "" + e[0].flag } catch (e) { console.log("error in getCountryInfo function", e) } }, s = async (e, t, n) => { const o = await fetch(e + t + n); try { const e = await o.json(); return console.log(e), e } catch (e) { console.log("error in getCityInfo function", e) } }, u = async (e, t, n, o) => { const a = await fetch(e + t + n + o); try { const e = await a.json(); return console.log(e), e } catch (e) { console.log("error in getWeatherData function", e) } }, d = async (e = "", t = {}) => { const n = await fetch(e, { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) }); try { const e = await n.json(); return console.log(e), e } catch (e) { console.log("error in Post function", e) } }, y = async (e, t, n) => { const o = await fetch(e + t + n); try { const e = await o.json(); console.log(e); let t = e.hits[0].previewURL; console.log(t); let n = document.getElementById("city-image"); n.style.display = "block", n.src = t } catch (e) { console.log("error in getImage function", e) } }, f = async () => { const e = await fetch("http://localhost:8080/all"); try { const t = await e.json(); document.getElementById("destination").innerHTML = `${t.city},${t.country}`, document.getElementById("dep-date").innerHTML = ` ${t.date} days left`, document.getElementById("weather").innerHTML = `The temp is ${t.temp} and there is ${t.sky}` } catch (e) { console.log("error in updateUI function", e) } }, m = document.getElementById("generate").addEventListener("click", () => { document.getElementById("results").style.display = "grid" }); n(0), n(1), n(2), n(3), n(4), n(5), n(6), n.p }]);