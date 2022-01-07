import{_ as t,r as n,c as o,b as e,e as p,a as r,d as a,o as c}from"./app.2733a36c.js";const x='{"title":"\u{1F48A} Feature Detection","description":"","frontmatter":{},"headers":[{"level":2,"title":"WebP Support","slug":"webp-support"},{"level":2,"title":"Client Hints","slug":"client-hints"}],"relativePath":"feature_detection.md","lastUpdated":1639962934391}',i={},l=r(`<h1 id="\u{1F48A}-feature-detection" tabindex="-1">\u{1F48A} Feature Detection <a class="header-anchor" href="#\u{1F48A}-feature-detection" aria-hidden="true">#</a></h1><h2 id="webp-support" tabindex="-1">WebP Support <a class="header-anchor" href="#webp-support" aria-hidden="true">#</a></h2><p>If you pass <code>auto</code> to the <code>output</code> parameter, we&#39;ll check the <code>accept</code> header of your request to figure out if you&#39;re using a WebP enabled browser or app. If that&#39;s the case, we&#39;ll alter the canonical request as if you explicitly asked for <code>webp</code>.</p><p>For the original image</p><div class="language-"><pre><code>https://riff.one/img/designcue-unsplash.jpg
</code></pre></div><p>The following parameters and header would yield a WebP encoded image.</p><div class="language-ts"><pre><code>
<span class="token constant">GET</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>resizer<span class="token punctuation">.</span>pictures<span class="token operator">/</span>w<span class="token operator">=</span><span class="token number">150</span>_output<span class="token operator">=</span>auto<span class="token operator">/</span>riff<span class="token punctuation">.</span>one<span class="token operator">/</span>img<span class="token operator">/</span>designcue<span class="token operator">-</span>unsplash<span class="token punctuation">.</span>jpg  
Accept<span class="token operator">:</span> image<span class="token operator">/</span>avif<span class="token punctuation">,</span>image<span class="token operator">/</span>webp<span class="token punctuation">,</span>image<span class="token operator">/</span>apng<span class="token punctuation">,</span>image<span class="token operator">/</span>svg<span class="token operator">+</span>xml<span class="token punctuation">,</span>image<span class="token comment">/*,*/</span><span class="token operator">*</span><span class="token punctuation">;</span>q<span class="token operator">=</span><span class="token number">0.8</span>

</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p><a href="./caching.html">Caching</a> will take place <em>after</em> this step, as to avoid using the same cache-key for devices with different feature support.</p></div><h2 id="client-hints" tabindex="-1">Client Hints <a class="header-anchor" href="#client-hints" aria-hidden="true">#</a></h2>`,9),d=a("Response headers will tell your browser we've enabled a few "),u=e("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/Client_hints",target:"_blank",rel:"noopener noreferrer"},"Client Hints",-1),h=a(". When supported, its requests should include information about screen size or DPI. "),_=e("img",{src:"https://resizer.pictures/detected_features",alt:"diagnosis"},null,-1);function f(k,g,m,b,v,w){const s=n("feature-detections");return c(),o("div",null,[l,e("p",null,[d,u,h,_,p(s,{keys:["vw","vh","dpr"]})])])}var T=t(i,[["render",f]]);export{x as __pageData,T as default};