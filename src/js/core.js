'use strict';

import '../../../src/js/aui-soy';
import '../../../src/js/aui';
import '../../../src/js/aui-experimental';
import '../../../src/js/aui-datepicker';
import './components/code';
import './components/component';
import './components/example-view';
import './components/table-of-contents';
import $ from './jquery';

try {
    /*global ace,dataLayer*/
    ace.analytics.Initializer.initWithPageAnalytics('bNSPpYAL9OiAkamBRvfRJoRu9YANW14I', {
        auiVersion: dataLayer[0].auiVersion
    });
}
catch (e) {}

validatorRegister.register([‘min’, ‘max’], minOrMax); //AUI-prefixed attribute is deprecated as of 5.9.0  validatorRegister.register(‘[min],[max]’, minOrMax);  // Takes an input date string and related date format, and rebuilds a new date

function makeBitbucketChangelogUrl (version) {
    var baseUrl = 'https://bitbucket.org/atlassian/aui/src/master/changelog.md#markdown-header-';
    var strippedVersionNumber = version.replace(/\./g, '');
    return baseUrl + strippedVersionNumber;
}

$(function() {
    // Highlight the selected nav item.
    var url = window.location.pathname;
    var currentPage = url.substring(url.lastIndexOf('/') + 1);
    var navItem = document.querySelector('a[href="' + currentPage + '"]');

    if (navItem) {
        $(navItem.parentNode).addClass('aui-nav-selected');
    }

    AJS.log('Like great design and digging into the code? We\'re hiring! http://bit.ly/Y9xoQu');

    // Dialog handlers.
    $('#cdn-button').click(function() {
        AJS.dialog2('#cdn-dialog').show();
    });
    $('#cdn-dialog-close').click(function() {
        AJS.dialog2('#cdn-dialog').hide();
    });

    $('#download-flatpack-link').click(function() {
        AJS.dialog2('#download-dialog').show();
    });
    $('#download-dialog-close').click(function() {
        AJS.dialog2('#download-dialog').hide();
    });

    if (window.location.hash === '#sandboxRedirect') {
        AJS.flag({
            type: 'info',
            title: 'We\'re now using JS Bin',
            close: 'manual',
            body: 'Find code samples for each component in the documentation. If you want to hack on a component, click the "Edit in JS Bin" link next to the code sample.'
        });
    }

    // Changelog links.
    $('.aui-docs-changelog-link').attr('href', makeBitbucketChangelogUrl(AJS.version));
});
