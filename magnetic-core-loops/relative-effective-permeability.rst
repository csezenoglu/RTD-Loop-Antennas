.. _relative-effective-permeability:

Relative Effective Permeability
===============================

A simple model of the relative effective permeability of the ferrite core :math:`\mu_{cer}` is related to the relative permeability of the unbounded ferrite material :math:`\mu_r = \mu / \mu_0` by :cite:`balanis:2005`. This was explained as a step-up in flux and hence of emf due to the core by Burgess in 1946 :cite:`burgess:1946iron`.

.. math::
	:class: math-accordion
	
	\mu_{cer} = \frac{\mu_r}{1 + D_F (\mu_r - 1)}

.. container:: math-panel

	- :math:`D_F`: Demagnetization factor of ferrite core
	- :math:`\mu_r` Relative permeability of the unbounded ferrite material

For most ferrite material, :math:`\mu_r` is very large ( :math:`\mu_r \gg 1` ) so that :math:`\mu_{cer}` is approximately inversely proportional to the demagnetization factor:

.. math::
	
	\mu_{cer} \cong D_F^{-1}

Devore and Bohley mentioned that a improved model of relative effective permeability in the equation of radiation resistance :cite:`devore:1977electrically`.

.. math::
	:class: math-accordion
	
	\mu_{cer} = 1 + \frac{(\mu_r - 1) (1 - D_w) \frac{l_F}{l_w} ( \frac{A_F}{A_w} )^2}{1 + D_F ( \mu_r - 1)}
	
.. container:: math-panel

	- :math:`D_w` is demagnetization factor of winding
	- :math:`l_F` is length of ferrite core
	- :math:`l_w` is length of winding
	- :math:`A_F` is cross section area of ferrite core
	- :math:`A_w` is cross section area of winding
