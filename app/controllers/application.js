import Controller from '@ember/controller';
// import styleguideLinks from 'ember-styleguide/constants/links';

// function replaceUrlPrefix(url) {
//   // ignore external apps
//   if(
//     url.endsWith('/blog')
//     || url.endsWith('/deprecations')
//     || url.endsWith('/api')
//   ) {
//     return url;
//   }

//   return url
//     .replace(/^https:\/\/emberjs.com\//, '/')
//     .replace(/^\/builds(\/\w+)$/, '/releases$1')
//     .replace(/\/builds$/, '/releases')
//     .replace(/\/legal$/, '/about/legal');
// }

// function replaceLinks(links) {
//   return links.map((group) => {
//     if (group.items) {
//       return {
//         ...group,
//         items: replaceLinks(group.items)
//       };
//     }

//     if(group.href) {
//       return {
//         ...group,
//         href: replaceUrlPrefix(group.href),
//       }
//     }

//     return group
//   })
// }

export default Controller.extend({
  // links: replaceLinks(styleguideLinks),
});
