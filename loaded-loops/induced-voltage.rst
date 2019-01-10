Induced Voltage and Power
=========================

A small air core loop of :math:`N` turns with a cross sectional area :math:`A` is placed in a uniform alternating magnetic field with the axis of the loop parallel to the field strength vector :math:`H`, then the induced emf will be:

.. math::

    e_{ind\_air}=\mu_0\omega HAN

If the aperture of the winding is filled with a long ferrite cylinder parallel to the loop, then the flux density of the loaded-loop will be increased by the factor of permeability of core :math:`\mu_r`. Therefore, induced voltage is given by

.. math::

    e_{ind\_fer}=\mu_0\mu_r\omega HAN

The strength of an electromagnetic field is usually expressed in terms of the electric field strength :math:`E`. Using the fundamental relation:

.. math::

    H=\sqrt{\frac{\epsilon_0}{\mu_0}}E \\
    \mu_0H=\frac{E}{c}

where :math:`H` is in A/m, :math:`E` is in V/m, and :math:`c` velocity of electromagnetic waves in free space approximately :math:`3\times{10}^8` m/s. Then, induced voltage can be written in terms of electric field strength :cite:`snelling:1969soft`:

.. math::

    e_{ind\_fer}=\mu_r\omega EAN/c

#Dunbar gave the formulation of induced voltage in the ferrite loaded receiving loop in free space

.. math::

    e_{max}=\frac{-j\omega\mu_0I_0\left(N_1\mu_{r1}S_1\right)\left(N_2\mu_{r2}S_2\right)e^{j\left(\omega t-\beta r\right)}}{4\pi}\left\{-\frac{\beta_0^2}{r}+j\frac{\beta_0}{r^2}+\frac{1}{r^3}\right\}

#In addition, an expression may be obtained for the induced voltage in a similar ferrite-cored receiving loop at a distance :math:`r` from the transmitting loop, the loops being in the same plane to maximize the :math:`H_\theta` component. 

.. math::

    e_{max}=\frac{\omega^2\mu_0^2\mu_{r1}\mu_{r2}N_1N_2S_1S_2Ie^{-j\left(\omega\gamma r\right)}}{4\pi}\left\{\frac{j\omega\epsilon}{r}+\frac{1}{\eta r^2}+\frac{1}{{j\omega\mu r}^3}\right\}

[Dunbar, 1972]

#Laurent and Carvalho gave an induced voltage formula of the ferrite loaded loop antennas [Laurent and Carvalho, 1962].

.. math::

    e_{ind}=\omega N\frac{E}{c}A_r\left[\mu_r+\left(\frac{d_c^2}{d_r^2}-1\right)\right]

where 

- :math:`E` :	electric field intensity vector
- :math:`c` :	speed of light
- :math:`A` :	cross section area of coil and rod
- :math:`d` :	diameter of coil and rod
- :math:`\mu_r` :	effective relative permeability of the rod

#An expression for the available power from the antenna is obtained [Pettengill, 1977]:

.. math::

    P_A=\frac{1}{4\mu_0c_0^2}\frac{0,69Q\mu_rV\omega E^2}{1+D\left(\mu_r-1\right)}
