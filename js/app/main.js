'use strict';define(['TocController','SearchController','jquery'],function(TocController,SearchController,$){var indexAttr=$("link[rel=index]").attr('href');if(indexAttr&&window.history){var index=new URI(indexAttr).absoluteTo(window.location.href).href();$.ajax({url:index,success:load})}function load(data){var $toc=$("<body>").append($.parseHTML(data)).find('nav');TocController($toc);SearchController($toc)}});