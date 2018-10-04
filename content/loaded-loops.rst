============
Loaded Loops
============

Radiated Fields
---------------

Islam noted that vector potential of a loop antenna that wrapped around the finite cylinder core is very difficult due to the complexity at the end of the cylinder [Islam, 1963].

Islam stated that the calculations for the finite cylinder core were difficult and the closest approach was the ellipsoid core loop antenna. The vector potential expression in this study is as follows [Islam, 1963a]

Magnetic Cores
--------------

A magnetic core is a piece of magnetic material with a high magnetic permeability used to confine and guide magnetic fields in electrical devices. It is made of ferromagnetic metal such as iron, or ferrimagnetic compounds such as ferrites. The high permeability, relative to the surrounding air, causes the magnetic field lines to be concentrated in the core material [wiki].

The use of a magnetic core can increase the strength of magnetic field in an electromagnetic coil by a factor of several hundred times what it would be without the core. However, magnetic cores have side effects which must be taken into account. In alternating current (AC) devices they cause energy losses, called core losses, due to hysteresis and eddy currents in applications such as transformers and inductors. "Soft" magnetic materials with low coercivity and hysteresis, such as silicon steel, or ferrite, are usually used in cores [wiki].

For the purpose of expressing material properties and design relations it is convenient to consider only sinusoidal wave forms. Ferrite cores are often used at quite low amplitudes. At these low amplitudes the non-linearity between :math:`B` and :math:`H` is small so that, to a first order, the waveform distortion may usually be neglected. Under these conditions, if the field strength is sinusoidal then the flux density and the e.m.f. (proportional to :math:`dB/dt`) may be taken as sinusoidal. Thus simple a.c. theory may be used to describe the influence of a magnetic material on an electric circuit [snelling]. 

The inductance of a circuit may be defined as the flux linkage per unit current, i.e. for an alternating current of peak amplitude :math:`I`,

.. math::
	:label: L
	
	L = \frac{N\phi}{I}

For a winding of :math:`N` turns on an ideal toroid of magnetic length :math:`l` and cross-sectional area :math:`A`
	
.. math::
	:label: L_extraction
	
	\begin{align}
	L &= \frac{NBA}{I} \\
	  &= \frac{NA}{I} \mu_0 \mu \frac{NI}{l} \\
	  &= \frac{\mu_0 \mu N^2 A}{l} \\
	  &= L_0 \mu
	\end{align}

.. math::
	:label: L_0
	
	L_0 = \frac{\mu_0 N^2 A}{l}
	
.. tip::	For more information about Paragraph Level Markup:
            `Have a look here <https://rtd-sphinx-theme.readthedocs.io/en/latest/demo/demo.html>`_.
