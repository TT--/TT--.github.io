---
---

/*  'Link directly to an open modal window in Bootstrap'
    from https://gist.github.com/MrDys/3512455
    
    - had to add empty front matter to this file to get jekyll to process the liquid variables below
    
    TT
*/

$(document).ready(function() {
    {% for project in site.projects %}
        if(window.location.href.indexOf('#portfolioModal{{ forloop.index }}') != -1) {
            $('#portfolioModal{{ forloop.index }}').modal('show');
        }
    {% endfor %}
});