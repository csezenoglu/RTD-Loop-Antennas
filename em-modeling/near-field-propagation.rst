Near field Propagation
======================

There is a 90 degree phase difference between electric and magnetic components of the electromagnetic wave at close to a small antenna. These components converge to be in phase as far from the antenna. This near field behaviour of an antenna as shown in :numref:`near-field-phase-vs-range-richards2010`  The relation between distance and the phase difference is given by:

.. math::

    r = \frac{\lambda}{2\pi}\sqrt[3]{\cot{\Delta_\phi}}

where :math:`r` is the distance from the antenna, :math:`\lambda` is the wavelength and :math:`\Delta_\phi` is the phase difference of electric and magnetic components :cite:`schantz:2007real,richards:2010electrically`. 

.. figure:: ../img/near-field-phase-vs-range-richards2010.png
    :align: center
    :scale: 100 %
    :name: near-field-phase-vs-range-richards2010

    : Phase relationships around an electrically small Hertzian dipole (left). Range versus electric-magnetic phase difference for a NFER signal (right).

Within the near-field, propagation relation for electric-electric or magnetic-magnetic antennas (like antennas) is

.. math::

    \frac{P_{rx}}{P_{tx}} = \frac{G_{rx}G_{tx}}{4} \left( \frac{1}{(kr)^6} - \frac{1}{(kr)^4} + \frac{1}{(kr)^2} \right)

in which the ratio of received power :math:`P_{rx}` to transmitted power :math:`P_{tx}` follows from the transmit antenna gain :math:`G_{tx}`, the receive antenna gain :math:`G_{rx}`, the distance :math:`r` between antennas, and the wave number :math:`k=2\pi/\lambda` and wavelength :math:`\lambda` :cite:`richards:2010electrically`.