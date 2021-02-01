---
id: numpy
title: Numpy
sidebar_label: Numpy
---

The fundamental package for scientific computing with Python

:::important
A n-dimensional Numpy array is a collection of **(n-1)** dimensional array  
A 1-dimensional array is list  
A 2-dimensional array is matrix
:::

### Installation

```bash
pip install numpy
conda install numpy
```
Anaconda comes with Numpy preinstalled


| Command | Output | Description |
| ------- | ------ | ----------- |
| `np_pl = np.asarray(["Java", "C++", "C"])` |  | Creating an Array from List |
| `print(np_pl.ndim)` | *1* | Print dimensions of an Array |
| `print(np_pl.shape)` | *(3,)* | Shape of the array |
| `print(np_pl.size) `| *3* | Total number of elements in an array |
| `print(type(np_pl))` | *<class 'numpy.ndarray'>* | Type of the Array |
| `print(np_pl.dtype)` | *<U4* | Type of elements inside the Array |
| `print(np_pl)` | *['Java' 'C++' 'C']* | Printing the array |
