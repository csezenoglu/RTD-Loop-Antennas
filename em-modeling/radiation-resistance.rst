Radiation Resistance
====================

As the energy lost on the ohmic resistance transforms into heat, the energy that is lost in the radiation resistance turns into electromagnetic radiation.

The radiation resistance of receiving loop antennas is usually very small that in the milli- or micro-ohm range. The loops are typically extremely inefficient because losses due to wire resistance and core magnetic material (if exist) are literally hundreds of times larger than radiation resistance :cite:`stewart:1958on`.

A ferrite core in the loop that tends to increase the magnetic flux, the magnetic field, the open-circuit voltage, and in turn the antenna efficiency of the loop. 

The radiation resistance of the ferrite loop is given by

.. math::
	:label: R_rad_f_1
	
	R_{rad}^{ferrite} =  R_{rad}^{air} \biggl(\frac{\mu_{ce}}{\mu_0}\biggr)^2 = R_{rad}^{air} {\mu_{cer}}^2

where :math:`R_{rad}^{ferrite}` is radiation resistance of ferrite loop, :math:`R_{rad}^{air}` is radiation resistance of air core loop, :math:`\mu_{ce}` is effective permeability of ferrite core, :math:`\mu_0 = 4\pi 10^-7 H/m` is permeability of free space, :math:`\mu_{cer}` is relative effective permeability of ferrite core.

Radiation resistance of N-turn, air cored loop is given by

.. math::
	:label: R_rad_air
	
	R_{rad}^{air} = 20 \pi^2 N^2 \biggl( \frac{C}{\lambda} \biggr)^4 \cong 31.171 \biggl( \frac{A^2}{\lambda^4} \biggr)

where :math:`C = 2 \pi a` is circumference of the loop [m], :math:`A = \pi a^2` is area of the loop [m] ,:math:`a` is radius of the loop [m], :math:`\lambda = c/f` is wavelength [m], :math:`c = 3 \cdot 10^8 m/s` is speed of light, :math:`f` is frequency [Hz], and :math:`N` is number of turns of the loop.

The relation is about 2 percent in error when the loop perimeter is λ/3. A circular loop of this perimeter has a diameter of about λ/10 [Kraus, 1988].

Using radiation resistance of air core loop equation and for an N-turn loop [Balanis, 2005, Rumsey and Weeks, 1956]

.. math::
	:label: R_rad_f_2
	
	R_{rad}^{ferrite} = 20 \pi^2 N^2 \mu_{cer}^2 \biggl( \frac{C}{\lambda} \biggr)^4

In order to determine the radiation resistance of a ferrite core, it is necessary to find the relative effective magnetic permeability of the ferrite core ( :math:`\mu_{cer}` ). Other variables are known geometrical and electrical properties.

Relative effective permeability
-------------------------------

A simple model of the relative effective permeability of the ferrite core :math:`\mu_{cer}` is related to the relative permeability of the unbounded ferrite material :math:`\mu_r = \mu / \mu_0` by :cite:`balanis:2005`

.. math::
	:label: mu_cer_simple
	
	\mu_{cer} = \frac{\mu_r}{1 + D_F (\mu_r - 1)}

where :math:`D_F` is demagnetization factor of ferrite core.

For most ferrite material, :math:`\mu_r` is very large ( :math:`\mu_r \gg 1` ) so that :math:`\mu_{cer}` is approximately inversely proportional to the demagnetization factor:

.. math::
	:label: mu_cer_approx
	
	\mu_{cer} \cong D_F^{-1}

Devore and Bohley mentioned that a improved model of relative effective permeability in the equation of radiation resistance [Devore ve Bohley, 1977].

.. math::
	:label: mu_cer_improved
	
	\mu_{cer} = 1 + \frac{(\mu_r - 1) (1 - D_w) \frac{l_F}{l_w} ( \frac{a_F}{a_w} )^2}{1 + D_F ( \mu_r - 1)}
	
where :math:`D_w` is demagnetization factor of winding, :math:`l_F` is length of ferrite core, :math:`l_w` is length of winding, :math:`a_F` is cross section area of ferrite core, and :math:`a_w` is cross section area of winding.
