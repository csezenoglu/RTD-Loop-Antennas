============
Small Loops
============

In the case of loop antennas, the dipole consists of a usually circular or rectangular current loop which acts like a coil and functions in response to the magnetic component of the electromagnetic field :cite:`pettengill:1977`.

A small loop (circular or square) is equivalent to an infinitesimal magnetic dipole whose axis is perpendicular to the plane of the loop. That is, the fields radiated by an electrically small circular or square loop are of the same mathematical form as those radiated by an infinitesimal magnetic dipole :cite:`balanis:2005`. 

In the case of loop antennas, the dipole consists of a usually circular or rectangular current loop which acts like a coil and functions in response to the magnetic component of the electromagnetic field.

Introduction
------------

The most convenient geometrical arrangement for the field analysis of a loop antenna is to position the antenna symmetrically on the :math:`x-y` plane, at :math:`z = 0`. The wire is assumed to be very thin and the current is assumed to be constant. A constant current distribution is accurate only for a loop antenna with a very small circumference :cite:`balanis:2005`. 

.. figure:: ../img/Geometrical_arrangement_for_loop_antenna_analysis.png
	:align: center
	:scale: 50 %
	:name: geometrical_arrangement_for_loop_antenna_analysis

	: Geometrical arrangement for loop antenna analysis
		
In the analysis of radiation problems, the usual procedure is to specify the sources and then require the fields radiated by the sources. 
It is a very common practice in the analysis procedure to introduce auxiliary functions, known as vector potentials, which will aid in the solution of the problems. The most common vector potential functions are the :math:`A` (magnetic vector potential) and :math:`F` (electric vector potential). 
While it is possible to determine the :math:`E` and :math:`H` fields directly from the source-current densities :math:`J` and :math:`M`, as shown in :numref:`geometrical_arrangement_for_loop_antenna_analysis`, it is usually much simpler to find the auxiliary potential functions first and then determine the :math:`E` and :math:`H`. This two-step procedure is also shown in :numref:`geometrical_arrangement_for_loop_antenna_analysis` :cite:`balanis:2005`.

    .. figure:: ../img/block_diagram_for_computing_fields.png
        :align: center
        :scale: 100 %
        :name: block_diagram_for_computing_fields

        : Block diagram for computing fields radiated by electric and magnetic sources.
		
Defining properties for an electrically small antenna are low directivity, low input resistance, high input reactance and low radiation efficiency [Stutzman and Thiele, 2012].

Radiated Fields
---------------

Thin Wire, Constant Current, Small Circumference
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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

	
Shielding
---------

A practical version of a single-winding loop for test purposes is shown in Fig. 4.12. As a protection against electric field effects, the actual winding is additionally surrounded by a tubular metal shield that must have a slot at one point in order not to short-circuit the magnetic field :cite:`rohner:2006` 

Loop Geometry
-------------

Dimensions
^^^^^^^^^^

For comparable performance, it appears that the length of the ferrite core must be roughly equal to the diameter of an equivalent air loop. However, other dimensions are smaller; that is, an air loop must be “large” in two dimensions, whereas a ferrite loop need be large in only one. The net result is a packaging advantage for the ferrite loop, somewhat less electrostatic pick-up than that for the air loop, and a structurally simpler device to electrostatically shield, if desired [Stewart, 1958].
The static measuring technique enables reasonably valid data to be accumulated at a rapid rate such that tests of ferrite-cored antennas covering a whole range of parameters can be obtained on a modest budget [Stewart, 1958].

Cylindrical cores longer than a solenoid winding are used to increase L for a given physical size. Cylindrical cores shorter than the solenoid winding and moved along the winding axis are used for L tuning with the greatest L occurring with the core centered [Serkan Aksoy, Mail, 04.04.2017].

Coil cross-section advantage/disadvantage
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
	:widths: 1 1


	*	- Circular
	 	- Rectangular
		
	*	- 
	 	- 
		
	*	- 
	 	- 
		
.. rubric:: Others

Fundamental characteristics of the loop antenna radiation pattern (far field) are largely independent of the loop shape [Donohoe, ECE4990 Lecture Notes].

The far fields of an electrically small loop antenna are dependent on the loop area but are independent of the loop shape [Donohoe, ECE4990 Lecture Notes].

For any of the shapes given, there is less than 1% deviation between demagnetization factors of polygonal and circular cylinders for aspect ratios l_r/d_r above unity. For acicular particles (l_r/d_r  ~ 6.0) this deviation is less than 0.25% even for the most radical shape, the triangular cross-section [Moskowitz and Della Torre, 1966].

Size and shape of coils affect their high frequency resistance very broadly. Cross section of coil had little effect on the observed resistance [Witzig, 1947].
