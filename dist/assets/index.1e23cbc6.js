import{S as m,P as y,W as w,B as p,M as h,a as g}from"./vendor.ef7ac68f.js";const v=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}};v();const c=new m,l=new y(75,window.innerWidth/window.innerHeight,.1,1e3),a=new w({canvas:document.querySelector("#game")});a.setPixelRatio(window.devicePixelRatio);a.setSize(window.innerWidth,window.innerHeight);l.position.setZ(30);document.addEventListener("keydown",L,!1);document.addEventListener("keyup",P,!1);let o="forward",k=.2;function L(r){r.keyCode=="65"?o="left":r.keyCode=="68"&&(o="right")}function P(r){(r.keyCode=="65"||r.keyCode=="68")&&(o="forward")}const x=new p(5,5,10),C=new h({color:65280,wireframe:!0}),n=new g(x,C);n.rotation.y=2;n.rotation.x=.1;c.add(n);function f(){requestAnimationFrame(f),o=="left"?n.rotation.y+=.05:o=="right"&&(n.rotation.y-=.05),n.translateZ(k),a.render(c,l)}f();