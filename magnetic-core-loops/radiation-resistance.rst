.. _magnetic-cored-radiation-resistance:

Radiation Resistance
====================

The radiation resistance of the magnetic-cored loop is obtained by multiplying :ref:`radiation resistance of the air-cored loop <air-cored-radiation-resistance>` and relative effective permeability of magnetic core :cite:`balanis:2005,rumsey:1956electrically`. 

.. math::
	:class: math-accordion
	
	R_{rad}^{ferrite} = R_{rad}^{air} {\mu_{cer}}^2

.. container:: math-panel

	- :math:`R_{rad}^{air}` : :ref:`Radiation resistance of the air-cored loop <air-cored-radiation-resistance>`
	- :math:`\mu_{cer}` : Relative effective magnetic permeability of the core

So, radiation resistance of the N-turn, magnetic-cored loop is given by

.. math::
	:class: math-accordion
	
	R_{rad}^{mc} = 20 \pi^2 N^2 \mu_{cer}^2 \biggl( \frac{C}{\lambda} \biggr)^4

.. container:: math-panel

	- :math:`C` : Circumference of the loop [m]
	- :math:`A` : Area of the loop [m]
	- :math:`\lambda` : Wavelength [m]
	- :math:`N` : Number of turns of the loop

In order to determine the radiation resistance of a ferrite core, it is necessary to find the :ref:`relative effective magnetic permeability <relative-effective-permeability>` of the ferrite core ( :math:`\mu_{cer}`). Other variables are known geometrical and electrical properties.

