Antenna Gain
============

An antenna's gain is a key performance number which combines the antenna's *directivity* and *electrical efficiency*. In a transmitting antenna, the gain describes how well the antenna converts input power into radio waves headed in a specified direction. In a receiving antenna, the gain describes how well the antenna converts radio waves arriving from a specified direction into electrical power. When no direction is specified, "gain" is understood to refer to the peak value of the gain, the gain in the direction of the antenna's main lobe. A plot of the gain as a function of direction is called the radiation pattern :cite:`wiki:antennagain`.

Schantz investigated a fundamental limit to antenna gain versus size in 2005. The limit for antenna gain versus size was established for a matched pair of like antennas :cite:`schantz:2005near`. In 2008, Compston et al. improved the fundamental limit on antenna's gain. First, a propogation formula derivedsimilar to Friis's formula. With this formula, the fundamental limit was shown, then a number of gain measurements taken from actual antennas were compared. There was an important assumption that not referenced: "For the special case where both antennas are at :math:`\theta=90\circ` relative to each other that the electric and magnetic fields have no radial components. Therefore, the near-field effective areas of the antennas are equivalent to their far-field effective areas.". Near-field radial component directivity was calculated. Finally, they noted that the near-field gain might be greater than or equal to the far-field gain :cite:`compston:2008fundamental`.

.. math::

    G_{ff} \leq G_{nf} \leq (4\pi R_{\lambda})^3 \sqrt{ \frac{2}{1+ (4\pi R_{\lambda})^2 } }
