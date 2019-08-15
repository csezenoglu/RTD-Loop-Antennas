.. _air-cored-radiation-resistance:

Radiation Resistance
====================

As the energy lost on the ohmic resistance transforms into heat, the energy that is lost in the radiation resistance turns into electromagnetic radiation.

The radiation resistance of receiving loop antennas is usually very small that in the milli- or micro-ohm range. The loops are typically extremely inefficient because losses due to wire resistance and core magnetic material (if exist) are literally hundreds of times larger than radiation resistance :cite:`stewart:1958on`.

Radiation resistance of N-turn, air-cored loop is given by

.. math::
	:label: R_rad_air
	:class: math-accordion
	
	R_{rad}^{air} = 20 \pi^2 N^2 \biggl( \frac{C}{\lambda} \biggr)^4 \cong 31.171 \biggl( \frac{A^2}{\lambda^4} \biggr)

.. container:: math-panel

	- :math:`C` : circumference of the loop [m]
	- :math:`A` : area of the loop [m]
	- :math:`\lambda` : wavelength [m]
	- :math:`N` : number of turns of the loop

The relation is about 2 % in error when the loop perimeter is λ/3. A circular loop of this perimeter has a diameter of about λ/10 :cite:`kraus:1988antennas`.
