============
Introduction
============

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