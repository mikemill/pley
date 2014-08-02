## Notes ##

1.  This uses composer to manage a few dependecies.  Use `./composer.phar install` to install the dependices.
2.  This relies on a `.htaccess` file to redirect the psuedo paths through `index.php`.  This is an Apache HTTP 2.2+ specific solution.  If using nginx or an older version of Apache you'll need to use a different solution.
3.  There are three external dependecies using CDNs
  1.  [Bootstrap 3.2](http://getbootstrap.com/)
  2.  [jQuery 1.11.1](http://jquery.com/)
  3.  [Bootbox 4.2](http://bootboxjs.com/)
4.  The [vim twig](https://github.com/evidens/vim-twig) plugin was very useful when editing the twig files.
