..	Unresolved Citations Across Documents
	If you cite something that has its bibliography in another document, then, at the moment, the extension may, or may not, realise that it has to add this citation. There are a few ways to work around this problem:

	-Use the option :all: in the bibliography directive (which will simply cause all entries to be included).
	-Ensure that the bibliography directive is processed after all cites. Sphinx appears to process files in an alphabetical manner. For instance, in case you have only one file containing a bibliography directive, simply name that file zreferences.rst.

	Duplicate Labels When Using :style: plain
	With :style: plain, labels are numerical, restarting at [1] for each bibliography directive. Consequently, when inserting multiple bibliography directives with :style: plain, you are bound to get duplicate labels for entries. There are a few ways to work around this problem:

	-Use a single bibliography directive for all your references.
	-Use the labelprefix option, as documented above.
	-Use a style that has non-numerical labelling, such as :style: alpha.
	
==========
References
==========

.. bibliography:: references.bib
	:style: unsrt
	