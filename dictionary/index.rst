Dictionary
**********

.. note::

    Dictionary style definitions of terms are good orginized and some important notes clarify complicated issues about magnetic testing :cite:`astm340-18:2018`. See :ref:`Magnetic Testing` chapter.

Aperture (of an antenna)
========================

#A surface, near or on an antenna, on which it is convenient to make assumptions regarding the field values for the purpose of computing fields at external points. **Note**: The aperture is often taken as that portion of a plane surface near the antenna, perpendicular to the direction of maximum radiation, through which the major part of the radiation passes :cite:`ieee145:1993`. 

#The power received by an antenna can be described in terms of a collecting area known as the effective aperture. This may be associated with a physical aperture but even a linear wire antenna can be described in terms of a notional collecting area. If the electromagnetic field has a power density of :math:`P_d`, and the receiving antenna has an effective aperture of :math:`A_e` then it will capture a power of :math:`P_d A_e`. The effective area depends only on the wavelength of the radiation and the directivity or gain :cite:`gibson:2010`.

Chu Limit
=========

#In electrical engineering and telecommunications the Chu–Harrington limit or Chu limit sets a lower limit on the Q factor for a small radio antenna. The theorem was developed in several papers between 1948 and 1960 by Lan Jen Chu, Harold Wheeler, and later by Roger Harrington. The definition of a small antenna is one that can fit inside a sphere of radius :math:`k^{-1}`, where :math:`k=2\pi /\lambda` is the wavenumber. For a small antenna the Q is proportional to the reciprocal of the volume of a sphere that encloses it. In practice this means that there is a limit to the bandwidth of data that can be sent to and received from small antennas such as are used in mobile phones.

More specifically, Chu established the limit on Q for a lossless and linear polarized antenna as 

.. math::

    Q\geq \frac{1}{k^3 a^3}+\frac{1}{ka}
    
where :math:`a` a is the radius of the smallest sphere containing the antenna and its current distribution. A circular polarized antenna can be half the size. (an extension of the theory of Chu by Harrington). As antennas are made smaller, the bandwidth shrinks and radiation resistance becomes smaller compared to loss resistances that may be present, thus reducing the radiation efficiency. For users this decreases the bitrate, limits range, and shortens battery life.
[http://en.turkcewiki.org/wiki/Chu–Harrington_limit]

Coupling Coefficient
====================

The coupling coefficient between the transmitting and the receiving coils as :cite:`zhang:2019wireless`

.. math::

    \kappa_{12} = \frac{M_{12}}{\sqrt{L_1L_2}}

Magnetic susceptibility
=======================

#Magnetic susceptibility is a dimensionless proportionality constant that indicates the degree of magnetization of a material in response to an applied magnetic field. A related term is magnetizability, the proportion between magnetic moment and magnetic flux density. A closely related parameter is the permeability, which expresses the total magnetization of material and volume.

#The volume magnetic susceptibility, represented by the symbol \chi_v (often simply \chi , sometimes \chi_m magnetic, to distinguish from the electric susceptibility), is defined in the SI units by the following relationship:

.. math::

    M=\chi H

Here

- M is the magnetization of the material (the magnetic dipole moment per unit volume), measured in amperes per meter,
- H is the magnetic field strength, also measured in amperes per meter.
- :math:`\chi` is therefore a dimensionless quantity.

Magnetic Torquer Rod
====================

#Magnetic torquer rods (also known as torquers, torque rods, torque bars, torqrods, or magnetorquers) are widely used as attitude control system (ACS) actuators for geostationary satellites, small satellites, and microsatellites. A magnetic torquer rod is essentially a long copper wire wound around a core. The core material could be special alloys or simply air. With a metal core, the magnetic torquer rod can generate a larger magnetic dipole moment at the expense of a larger residual moment as compared with the air-core type. Magnetic torquer rods are designed to generate controllable magnetic dipole moments that interact with the Earth’s magnetic field and generate torques for active attitude control purposes for spacecraft (Sidi, 1997;Wertz, 1978). Torque Tmag of a magnetic torquer is given by the cross product of its magnetic dipole moment M and the Earth’s magnetic-field vector B, i.e., Tmag = M × B. Magnetic control systems have the characteristics of relatively light weight and require no moving parts, expendables, or complex hardware.


Modal Analysis
==============

Modal analysis is the study of the dynamic properties of systems in the frequency domain.
[http://en.turkcewiki.org/wiki/Modal_analysis]

Orthogonal Signals
==================

The orthognality in signals means that the receiver can detect any one of them seperatly, and that is the meaning of non interference.