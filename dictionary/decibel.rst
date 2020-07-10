.. _decibel-conversion:

Decibel Conversion
==================

The dB scale is a logarithmic, unitless scale. It always requires a reference quantity to be related against. The dB is calculated via two different expressions

.. math::

    X_{dB} = 10 log_{10} \left( \frac{X_{lin}}{X_{ref}} \right)

or

.. math::

    Y_{dB} = 20 log_{10} \left( \frac{Y_{lin}}{Y_{ref}} \right)

- If you convert a quantity :math:`X` that relates to **power** or energy, the **factor is 10**.
- If you convert a quantity :math:`Y` that relates to **amplitude**, the **factor is 20**.
- If you convert an expression that contains **squares**, use **factor 10**.
- If you convert an expression that does **not contain squares**, use **factor 20**.

Reference: https://dspillustrations.com/pages/posts/misc/decibel-conversion-factor-10-or-factor-20.html (14.05.2020)
