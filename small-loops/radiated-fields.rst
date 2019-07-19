Radiated Fields
===============

A small loop in which loop current is everywhere in phase can be expressed a magnetic dipole with dipole moment :math:`M`. All the electromagnetic field components of the magnetic dipole are proportional to the :math:`M` when the loop current varies sinusoidally. These fields vary with distance :math:`R` as :math:`k^2/R` for the radiation or far field components, as :math:`k/R^2` for the transition field components, and as :math:`l/R^3` for the induction or reactive field components. If the wavelength :math:`\lambda`, and any one of the three field components are given, the remaining components may be calculated. Alternately, if the :math:`M` is given, all three field components may be calculated :cite:`stewart:1958on`.

Thin Wire, Constant Current, Small Circumference
------------------------------------------------

The wire is assumed to be very thin and the current spatial distribution is given by :math:`I_\phi = I_0` where :math:`I_0` is a constant. Although this type of current distribution is accurate only for a loop antenna with a very small circumference, a more complex distribution makes the mathematical formulation quite cumbersome :cite:`balanis:2005`.

.. math::
	:label: A_vec
	
	\vec A = j \frac{k \mu a^2 I_0 \sin \theta}{4 r} \left[ 1 + \frac{1}{jkr} \right] e^{-jkr} \vec a_\phi

.. math::
	:label: electric_field_components
	
	\begin{aligned} 
	E_r &= 0 \\
	E_\theta &= 0 \\
	E_\phi &= \eta \frac{ (ka)^2 I_0 \sin \theta}{4 r} \left[ 1 + \frac{1}{jkr} \right] e^{-jkr}
	\end{aligned} 
	
.. math::
	:label: magnetic_field_components
	
	\begin{aligned} 
	H_r &= j \frac{k a^2 I_0 \cos \theta}{2 r^2} \left[ 1 + \frac{1}{jkr} \right] e^{-jkr} \\ 
	H_\theta &= - \frac{ (ka)^2 I_0 \sin \theta}{4 r} \left[ 1 + \frac{1}{jkr} - \frac{1}{(kr)^2} \right] e^{-jkr} \\ 
	H_\phi &= 0 
	\end{aligned} 
