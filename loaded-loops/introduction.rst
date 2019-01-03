Introduction
============

Ferrite core electrically small loops are often used for receiving signals, such as in radios and pagers, where the signal to noise ratio is much important than efficiency. 

.. figure:: ../img/effect-of-the-ferrite-rod.png
        :align: center
        :scale: 100 %
        :name: effect-of-the-ferrite-rod

        : Effect of the ferrite rod [Laurent and Carvalho, 1962].

.. figure:: ../img/influence-of-a-ferrite-rod.png
        :align: center
        :scale: 100 %
        :name: influence-of-a-ferrite-rod

        : Influence of a ferrite rod [Alex Goldman-Modern Ferrite Technology-Springer (2010) p305].

Eshraghian et al. (1982), Ranasinghe (2007), and Cole et al. (2003) show that without the magnetic core the coupling volume of a long solenoid is just the physical volume, but when a magnetic core is inserted, the coupling volume increases by a factor equal to the effective permeability of the magnetic core [Serkan Aksoy, Mail, 10.08.2017].

The loops are rarely used as transmitting antennas above low levels of power due to their poor radiation efficiency (low radiation resistance). As transmitting antennas, they become less significant below 30 MHz. If the efficiency is not an issue and power levels are very low, they are used as a transmitter. Because they would soon become very hot when any reasonable levels of power are fed into them, they must be cooled (for example by water as in torpedo transmitter).

As an exception, a tuned transmitting loop, can be equipped with a remotely controlled capacitor to make a resonant circuit, is used to transmit waves. However, such loops have to be retuned whenever the frequency is changed (even in the same operating band) because they are extremely narrowband. Nonetheless, they are sometimes the only practicable option for transmission when space is restricted [Serkan Aksoy, Mail, 01.06.2017].

Dimensions
----------

Frequency
---------

Above 20 MHz or so, ferrite losses increase to the extent that ferrite loops may not be as good as air loops; relatively loss-free ferrites at higher frequencies tend to have low permeability and hence the slight advantage obtained with ferrites at low frequencies tends to disappear [Stewart, 1958].
At a moderate distance R from the dipole, provided R is large compared to dipole dimensions, and in the static case (that is, in the audio frequency region), k/R2 and k2/R are very small relative to l/R3 and hence can be ignored by comparison. This permits a static measurement of magnetic field intensity to be made in order to find dipole moment. Then radiation at some radio frequency can be determined providing that the dipole moment does not change from static to radio frequencies and providing the dipole is small enough to still be considered an elementary dipole at the radio frequency of interest [Stewart, 1958].

Measurement
-----------

Direct radio-frequency measurements usually require that the magnetic dipole antenna be electrostatically shielded; otherwise, incidental electric dipole radiation makes it almost impossible to separate radiation into electric and magnetic types. With static magnetic measurements of a radio-frequency antenna, on the other hand, antenna inductance is so small that no appreciable voltage is required to obtain antenna driving current and hence no significant electric dipole moment exists [Stewart, 1958].

An unshielded magnetic dipole at radio frequencies will radiate to a certain extent as an electric dipole. As a result, radiated power will exceed that calculated for magnetic dipole radiation alone. Electric dipole radiation typically affects radiation intensity most where the magnetic dipole radiation is a minimum; in the case of the loop, the major effect is to fill in the nulls. Magnetostatic measurements cannot account for electric dipole radiation; hence, magnetostatically predicted radio-frequency radiation resistance may be somewhat less than actual radiation resistance if the magnetic-type antenna is unshielded [Stewart, 1958].

Permeability (Influence of High-Frequency Magnetic Fields)
----------------------------------------------------------

The reaction of the magnetic induction B (and thus also of the magnetization) on an external alternating magnetic field H with a time dependence can be expressed as:

.. math::
	:label: BH

	\begin{array}{c}
	B=B_0 e^{i(\omega t - \delta)}\\
	H=H_0 e^{i\omega t}
	\end{array}

As a consequence the permeability  :math:`\mu` becomes complex:

.. math::
	:label: mu1

	\mu = \frac{B}{H} = \frac{B_0 e^{i(\omega t - \delta)}}{H_0 e^{i\omega t}} = \frac{B_0}{H_0}e^{-i\delta}

Using :math:`e^{-i\delta}=\cos⁡{\delta}-i \sin⁡{\delta}`  we get:

.. math::
	:label: mu2

	\mu = \frac{B_0}{H_0}\cos⁡{\delta} - i \frac{B_0}{H_0}\sin{\delta}

Characterizing the real and negative imaginary part of the permeability by:

.. math::
	:label: mu3

	\begin{array}{c}
	\mu'=\frac{B_0}{H_0}\cos⁡{\delta}\\
	\mu''=\frac{B_0}{H_0}\sin{\delta}
	\end{array}

we obtain [Fundamentals of magnetism - M.Getzlaff – 2008, p.139]:

.. math::
	:label: mu4

	\mu = \mu' -i\mu''

Due to the finite size of the ferrite rods, the effective permeability of the rod decreases near the ends of the solenoid. As a consequence of this, the inductance of the solenoid does not always grow as the square of the number of turns, as would be expected [Serkan Aksoy, Mail, 15.03.2017].

Figure 1 shows the rod permeability as a function of the length to diameter ratio for the six materials available in rods [Fair-Rite Rods Datasheet].

.. figure:: ../img/rod-permeability-fair-rite-datasheet.png
        :align: center
        :scale: 100 %
        :name: rod-permeability-fair-rite-datasheet

        : Rod permeability [fair-rite-datasheet].

Two Winding Solenoid
--------------------

.. figure:: ../img/two-winding-solenoid.png
        :align: center
        :scale: 100 %
        :name: two-winding-solenoid

        : Two winding solenoid.

Loopstick antenna from an AM radio having two windings, one for long wave and one for medium wave (AM broadcast) reception. Typically, 10 cm long, these loop antennas are usually hidden inside the radio receiver [Serkan Aksoy, Mail, 03.04.2017]. 

In the contra-wound configuration, introduced by the US Army Signal Corp many years ago and described in publications by Burhans and by Cornell, the coil wound on the ferrite rod is split into two equal parts wound withopposite sense. If the "outside" ends of these coils are grounded, a single-ended signal can be taken from the midpoint of the coil resulting in muchsimplified preamp design. Also, since the total coil inductance is halved (the half-coils would be in parallel), for a given required total inductance the number of turns can be increased providing increased sensitivity. (The total self-capacity of the windings is increased but ordinarily such would not be of principal concern.) [Serkan Aksoy, Mail, 29.07.2017] 

Notes
-----

Mark 48 torpedo

Unconfirmed reports indicate that the torpedo's sensors can monitor surrounding electrical and magnetic fields. This may refer to the electromagnetic coils on the warhead (at least from 1977 to 1981), used to sense the metallic mass of the ship's hull and detonate at the proper stand-off distance [Serkan Aksoy, Mail, 08.04.2017].

A magnetic fuze reacts to the variable magnetic field of a ship is necessary for the most successful position of detonation under the keel of the ship. Work on this aspect of the bomb was found to be far from complete. The susceptibility to disturbances and the reaction capacity of such fuzes had not been investigated thoroughly either. A magnetic proximity fuze, however, is necessary for greater release ranges and for curved underwater trajectories.

Good detonation positions can be achieved with straight underwater travel if the fuze is set to go off after a specific distance through the water. The angle of entry must naturally not be altered as the underwater travel depends on the angle of entry. The time delay set on the fuze can be determined most simply by assuming a constant time for underwater travel.

In designing the fuze system, the following points must be borne in mind. Further, the speed and range of release must be functioned very accurately for a pre-set time as the tolerance of plus or minus 0.1 second can only be achieved with a clockwork fuze. Finally, the tail section must be jettisoned by explosive bolts or by some other adequate method on impact with the water [Serkan Aksoy, Mail, 11.04.2017].

The (modern) German navy uses submarines whose hulls are made entirely out of some classified non-magnetic alloy. This protects them from setting off static magnetic fuses and submarine detection systems [Serkan Aksoy, Mail, 11.04.2017].

.. figure:: ../img/distribution-of-flux-density-along-ferrite-snelling-1969.png
        :align: center
        :scale: 100 %
        :name: distribution-of-flux-density-along-ferrite-snelling-1969

        : distribution-of-flux-density-along-ferrite-snelling-1969 p188.