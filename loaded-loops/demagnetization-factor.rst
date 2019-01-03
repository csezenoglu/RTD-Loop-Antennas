Demagnetization Factor
======================

Demagnetization factor has been found experimentally for different core geometries, as shown in :numref:`demagnetization-factor-balanis`. In general, demagnetization factor is a function of the geometry of the ferrite core :cite:`balanis:2005`.

.. figure:: ../img/demagnetization-factor-balanis.png
        :align: center
        :scale: 100 %
        :name: demagnetization-factor-balanis

        : Demagnetization factor as a function of core lenght/diameter ratio.

The demagnetizing factor can be calculated precisely only for ellipsoids of revolution, which have uniform magnetization. For a sphere, :math:`D_F = 1/3`, for a very thin plate, :math:`D_F = 1`; and for an infinitely long cylinder in a transverse field, :math:`D_F = 1/2`. For some specimens of simple shape, the demagnetizing factor is calculated by empirical formulas, but in most cases, it is determined experimentally [Dictionary, 2003].

The literature distinguishes between “magnetometric” and “fluxmetric” (or “ballistic”) demagnetizing factors :math:`D_m` and :math:`D_f`. If the sample is in a uniform applied field :math:`H_a` along its axis, the fluxmetric (or ballistic) demagnetizing factor :math:`D_f` is defined as the ratio of the average demagnetizing field to the average magnetization at the midplane perpendicular to the axis. The magnetometric demagnetizing factor :math:`D_m`, is defined as the ratio of the average demagnetizing field to the average magnetization of the entire sample [Chen at al., 1991].

Demagnetization Factor from Charts
----------------------------------

Bozorth and Chapin investigated :math:`D_F` of rods. A chart is constructed for converting the :math:`\mu_{ce}` to :math:`\mu` of cylinders of any given ratio of :math:`l_r/d_r`. The demagnetizing factors for oblate and prolate ellipsoids of revolution, and for rods having finite permeabilities, are plotted in :numref:`demagnetization-factor-bozorth` [Bozorth and Chapin, 1942].

Osborn investigated demagnetizing factors of the general ellipsoid. This article presents charts and tables which make possible easy determination of the demagnetizing factor for any principal axis of an ellipsoid of any shape. Formulas for the demagnetizing factors of the general ellipsoid are included together with supplementary formulas which cover many special cases [Osborn, 1945].

Rumsey and Weeks noted that the value of :math:`D_F` is known from the static solution; it depends on the shape of the ellipsoid and is independent of :math:`\mu` [Rumsey and Weeks, 1956].

.. figure:: ../img/demagnetization-factor-bozorth.png
        :align: center
        :scale: 100 %
        :name: demagnetization-factor-bozorth

        : Demagnetization factors of ellipsoids and cylinders.

Moskowitz et. al. investigated magnetometric demagnetization factors for regular polygonal cylinders. Longitudinal magnetometric demagnetization factors for several equilateral polygonal cylinders have been determined by inductance analogy from available tables of inductance. These values are listed in Table at :numref:`demagnetization-factor-moskowitz-table` as a function of the equivalent-area aspect ratio :math:`l_r/d_r` [Moskowitz et. al., 1966].


.. figure:: ../img/demagnetization-factor-moskowitz-table.png
        :align: center
        :scale: 100 %
        :name: demagnetization-factor-moskowitz-table

        : Demagnetization factors of polygonal cylinders.

Demagnetization Factor from Formulas
------------------------------------

:math:`D_F` is the demagnetizing factor of an ellipsoid with the dimensional ratio :math:`l_r/d_r` [Mager, 1968].

.. math::
	:label: D_F

	D_F=\frac{1}{\left(l_r/d_r\right)^2-1}\left[\frac{l_r/d_r}{\sqrt{\left(l_r/d_r\right)^2-1}\ln{\left(l_r/d_r+\sqrt{\left(l_r/d_r\right)^2-1}\right)}}-1\right]

