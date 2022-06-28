--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: courier; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE courier (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: courier_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE courier_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: courier_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE courier_id_seq OWNED BY courier.id;


--
-- Name: dropoff; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE dropoff (
    id integer NOT NULL,
    locationid integer NOT NULL,
    courierid integer NOT NULL,
    lat double precision NOT NULL,
    long double precision NOT NULL
);


--
-- Name: dropoff_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE dropoff_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: dropoff_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE dropoff_id_seq OWNED BY dropoff.id;


--
-- Name: location; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE location (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    postcode integer NOT NULL
);


--
-- Name: location_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE location_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE location_id_seq OWNED BY location.id;


--
-- Name: package; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE package (
    id integer NOT NULL,
    courierid integer NOT NULL,
    length integer NOT NULL,
    width integer NOT NULL,
    height integer NOT NULL,
    price integer NOT NULL,
    weight integer NOT NULL,
    link character varying(100) NOT NULL
);


--
-- Name: package_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE package_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: package_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE package_id_seq OWNED BY package.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY courier ALTER COLUMN id SET DEFAULT nextval('courier_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY dropoff ALTER COLUMN id SET DEFAULT nextval('dropoff_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY location ALTER COLUMN id SET DEFAULT nextval('location_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY package ALTER COLUMN id SET DEFAULT nextval('package_id_seq'::regclass);


--
-- Data for Name: courier; Type: TABLE DATA; Schema: public; Owner: -
--

COPY courier (id, name) FROM stdin;
1	City
2	DHL
3	GDEX
4	J&T
5	Ninja
6	Pgeon
7	Poslaju
\.


--
-- Name: courier_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('courier_id_seq', 7, true);


--
-- Data for Name: dropoff; Type: TABLE DATA; Schema: public; Owner: -
--

COPY dropoff (id, locationid, courierid, lat, long) FROM stdin;
\.


--
-- Name: dropoff_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('dropoff_id_seq', 1, false);


--
-- Data for Name: location; Type: TABLE DATA; Schema: public; Owner: -
--

COPY location (id, name, postcode) FROM stdin;
1	Perlis	1000
2	Perlis	1007
3	Perlis	1009
4	Perlis	1500
5	Perlis	1502
6	Perlis	1503
7	Perlis	1504
8	Perlis	1505
9	Perlis	1506
10	Perlis	1508
11	Perlis	1512
12	Perlis	1514
13	Perlis	1516
14	Perlis	1517
15	Perlis	1518
16	Perlis	1524
17	Perlis	1529
18	Perlis	1532
19	Perlis	1538
20	Perlis	1540
21	Perlis	1546
22	Perlis	1550
23	Perlis	1551
24	Perlis	1556
25	Perlis	1560
26	Perlis	1564
27	Perlis	1570
28	Perlis	1572
29	Perlis	1576
30	Perlis	1578
31	Perlis	1582
32	Perlis	1586
33	Perlis	1590
34	Perlis	1592
35	Perlis	1594
36	Perlis	1596
37	Perlis	1598
38	Perlis	1600
39	Perlis	1604
40	Perlis	1606
41	Perlis	1608
42	Perlis	1609
43	Perlis	1610
44	Perlis	1612
45	Perlis	1614
46	Perlis	1620
47	Perlis	1622
48	Perlis	1626
49	Perlis	1628
50	Perlis	1630
51	Perlis	1632
52	Perlis	1634
53	Perlis	1644
54	Perlis	1646
55	Perlis	1648
56	Perlis	1660
57	Perlis	1664
58	Perlis	1670
59	Perlis	1672
60	Perlis	1673
61	Perlis	1674
62	Perlis	1676
63	Perlis	1680
64	Perlis	1694
65	Perlis	2000
66	Perlis	2100
67	Perlis	2200
68	Perlis	2400
69	Perlis	2450
70	Perlis	2500
71	Perlis	2600
72	Perlis	2607
73	Perlis	2609
74	Perlis	2700
75	Perlis	2707
76	Perlis	2709
77	Perlis	2800
78	Kedah	5000
79	Kedah	5050
80	Kedah	5100
81	Kedah	5150
82	Kedah	5200
83	Kedah	5250
84	Kedah	5300
85	Kedah	5350
86	Kedah	5400
87	Kedah	5460
88	Kedah	5500
89	Kedah	5502
90	Kedah	5503
91	Kedah	5504
92	Kedah	5505
93	Kedah	5506
94	Kedah	5508
95	Kedah	5512
96	Kedah	5514
97	Kedah	5516
98	Kedah	5517
99	Kedah	5518
100	Kedah	5520
101	Kedah	5532
102	Kedah	5534
103	Kedah	5536
104	Kedah	5538
105	Kedah	5550
106	Kedah	5551
107	Kedah	5552
108	Kedah	5556
109	Kedah	5558
110	Kedah	5560
111	Kedah	5564
112	Kedah	5576
113	Kedah	5578
114	Kedah	5580
115	Kedah	5582
116	Kedah	5586
117	Kedah	5590
118	Kedah	5592
119	Kedah	5594
120	Kedah	5600
121	Kedah	5604
122	Kedah	5610
123	Kedah	5612
124	Kedah	5614
125	Kedah	5620
126	Kedah	5621
127	Kedah	5622
128	Kedah	5626
129	Kedah	5628
130	Kedah	5630
131	Kedah	5632
132	Kedah	5644
133	Kedah	5660
134	Kedah	5661
135	Kedah	5664
136	Kedah	5670
137	Kedah	5672
138	Kedah	5673
139	Kedah	5674
140	Kedah	5675
141	Kedah	5676
142	Kedah	5680
143	Kedah	5690
144	Kedah	5696
145	Kedah	5700
146	Kedah	5710
147	Kedah	5720
148	Kedah	5990
149	Kedah	6000
150	Kedah	6007
151	Kedah	6009
152	Kedah	6010
153	Kedah	6050
154	Kedah	6100
155	Kedah	6150
156	Kedah	6200
157	Kedah	6207
158	Kedah	6209
159	Kedah	6250
160	Kedah	6300
161	Kedah	6350
162	Kedah	6400
163	Kedah	6500
164	Kedah	6507
165	Kedah	6509
166	Kedah	6550
167	Kedah	6570
168	Kedah	6600
169	Kedah	6650
170	Kedah	6660
171	Kedah	6700
172	Kedah	6707
173	Kedah	6709
174	Kedah	6710
175	Kedah	6720
176	Kedah	6750
177	Kedah	6800
178	Kedah	6900
179	Kedah	6910
180	Kedah	7000
181	Kedah	7007
182	Kedah	7009
183	Kedah	8000
184	Kedah	8007
185	Kedah	8009
186	Kedah	8010
187	Kedah	8100
188	Kedah	8110
189	Kedah	8200
190	Kedah	8210
191	Kedah	8300
192	Kedah	8320
193	Kedah	8330
194	Kedah	8340
195	Kedah	8400
196	Kedah	8407
197	Kedah	8409
198	Kedah	8500
199	Kedah	8507
200	Kedah	8509
201	Kedah	8600
202	Kedah	8700
203	Kedah	8800
204	Kedah	9000
205	Kedah	9007
206	Kedah	9009
207	Kedah	9010
208	Kedah	9020
209	Kedah	9100
210	Kedah	9110
211	Kedah	9200
212	Kedah	9300
213	Kedah	9310
214	Kedah	9400
215	Kedah	9410
216	Kedah	9600
217	Kedah	9700
218	Kedah	9800
219	Kedah	9810
220	Penang	10000
221	Penang	10050
222	Penang	10100
223	Penang	10150
224	Penang	10200
225	Penang	10250
226	Penang	10300
227	Penang	10350
228	Penang	10400
229	Penang	10450
230	Penang	10460
231	Penang	10470
232	Penang	10500
233	Penang	10502
234	Penang	10503
235	Penang	10504
236	Penang	10505
237	Penang	10506
238	Penang	10508
239	Penang	10512
240	Penang	10514
241	Penang	10516
242	Penang	10518
243	Penang	10524
244	Penang	10534
245	Penang	10538
246	Penang	10540
247	Penang	10542
248	Penang	10546
249	Penang	10550
250	Penang	10551
251	Penang	10552
252	Penang	10558
253	Penang	10560
254	Penang	10564
255	Penang	10566
256	Penang	10570
257	Penang	10576
258	Penang	10578
259	Penang	10582
260	Penang	10590
261	Penang	10592
262	Penang	10593
263	Penang	10594
264	Penang	10596
265	Penang	10600
266	Penang	10604
267	Penang	10609
268	Penang	10610
269	Penang	10612
270	Penang	10620
271	Penang	10622
272	Penang	10626
273	Penang	10628
274	Penang	10634
275	Penang	10646
276	Penang	10648
277	Penang	10660
278	Penang	10661
279	Penang	10662
280	Penang	10670
281	Penang	10672
282	Penang	10673
283	Penang	10674
284	Penang	10676
285	Penang	10690
286	Penang	10710
287	Penang	10720
288	Penang	10730
289	Penang	10740
290	Penang	10750
291	Penang	10760
292	Penang	10770
293	Penang	10780
294	Penang	10790
295	Penang	10800
296	Penang	10810
297	Penang	10820
298	Penang	10830
299	Penang	10840
300	Penang	10850
301	Penang	10910
302	Penang	10920
303	Penang	10990
304	Penang	11000
305	Penang	11010
306	Penang	11020
307	Penang	11050
308	Penang	11060
309	Penang	11100
310	Penang	11200
311	Penang	11300
312	Penang	11400
313	Penang	11409
314	Penang	11500
315	Penang	11600
316	Penang	11609
317	Penang	11700
318	Penang	11800
319	Penang	11900
320	Penang	11910
321	Penang	11920
322	Penang	11950
323	Penang	11960
324	Penang	12000
325	Penang	12100
326	Penang	12200
327	Penang	12300
328	Penang	12700
329	Penang	12710
330	Penang	12720
331	Penang	12990
332	Penang	13000
333	Penang	13009
334	Penang	13020
335	Penang	13050
336	Penang	13100
337	Penang	13110
338	Penang	13200
339	Penang	13210
340	Penang	13220
341	Penang	13300
342	Penang	13310
343	Penang	13400
344	Penang	13409
345	Penang	13500
346	Penang	13600
347	Penang	13700
348	Penang	13800
349	Penang	14000
350	Penang	14007
351	Penang	14009
352	Penang	14020
353	Penang	14100
354	Penang	14101
355	Penang	14110
356	Penang	14120
357	Penang	14200
358	Kedah	14290
359	Penang	14300
360	Penang	14310
361	Penang	14320
362	Kedah	14390
363	Penang	14400
364	Kelantan	15000
365	Kelantan	15050
366	Kelantan	15100
367	Kelantan	15150
368	Kelantan	15159
369	Kelantan	15200
370	Kelantan	15300
371	Kelantan	15350
372	Kelantan	15400
373	Kelantan	15500
374	Kelantan	15502
375	Kelantan	15503
376	Kelantan	15504
377	Kelantan	15505
378	Kelantan	15506
379	Kelantan	15508
380	Kelantan	15512
381	Kelantan	15514
382	Kelantan	15516
383	Kelantan	15517
384	Kelantan	15518
385	Kelantan	15519
386	Kelantan	15520
387	Kelantan	15524
388	Kelantan	15529
389	Kelantan	15532
390	Kelantan	15534
391	Kelantan	15536
392	Kelantan	15538
393	Kelantan	15540
394	Kelantan	15546
395	Kelantan	15548
396	Kelantan	15550
397	Kelantan	15551
398	Kelantan	15556
399	Kelantan	15558
400	Kelantan	15560
401	Kelantan	15564
402	Kelantan	15570
403	Kelantan	15572
404	Kelantan	15576
405	Kelantan	15578
406	Kelantan	15582
407	Kelantan	15586
408	Kelantan	15590
409	Kelantan	15592
410	Kelantan	15594
411	Kelantan	15596
412	Kelantan	15600
413	Kelantan	15604
414	Kelantan	15608
415	Kelantan	15609
416	Kelantan	15612
417	Kelantan	15614
418	Kelantan	15616
419	Kelantan	15622
420	Kelantan	15623
421	Kelantan	15626
422	Kelantan	15628
423	Kelantan	15630
424	Kelantan	15632
425	Kelantan	15634
426	Kelantan	15644
427	Kelantan	15646
428	Kelantan	15648
429	Kelantan	15658
430	Kelantan	15660
431	Kelantan	15661
432	Kelantan	15664
433	Kelantan	15670
434	Kelantan	15672
435	Kelantan	15673
436	Kelantan	15674
437	Kelantan	15676
438	Kelantan	15680
439	Kelantan	15690
440	Kelantan	15710
441	Kelantan	15720
442	Kelantan	15730
443	Kelantan	15740
444	Kelantan	15988
445	Kelantan	15990
446	Kelantan	16010
447	Kelantan	16020
448	Kelantan	16030
449	Kelantan	16040
450	Kelantan	16050
451	Kelantan	16060
452	Kelantan	16070
453	Kelantan	16080
454	Kelantan	16090
455	Kelantan	16100
456	Kelantan	16109
457	Kelantan	16150
458	Kelantan	16200
459	Kelantan	16210
460	Kelantan	16250
461	Kelantan	16300
462	Kelantan	16310
463	Kelantan	16320
464	Kelantan	16400
465	Kelantan	16450
466	Kelantan	16500
467	Kelantan	16600
468	Kelantan	16700
469	Kelantan	16800
470	Kelantan	16810
471	Kelantan	17000
472	Kelantan	17007
473	Kelantan	17009
474	Kelantan	17010
475	Kelantan	17020
476	Kelantan	17030
477	Kelantan	17040
478	Kelantan	17050
479	Kelantan	17060
480	Kelantan	17070
481	Kelantan	17200
482	Kelantan	17500
483	Kelantan	17507
484	Kelantan	17509
485	Kelantan	17510
486	Kelantan	17600
487	Kelantan	17610
488	Kelantan	17700
489	Kelantan	18000
490	Kelantan	18050
491	Kelantan	18200
492	Kelantan	18300
493	Kelantan	18400
494	Kelantan	18500
495	Terengganu	20000
496	Terengganu	20050
497	Terengganu	20100
498	Terengganu	20200
499	Terengganu	20300
500	Terengganu	20400
501	Terengganu	20500
502	Terengganu	20502
503	Terengganu	20503
504	Terengganu	20504
505	Terengganu	20505
506	Terengganu	20506
507	Terengganu	20508
508	Terengganu	20512
509	Terengganu	20514
510	Terengganu	20516
511	Terengganu	20517
512	Terengganu	20518
513	Terengganu	20519
514	Terengganu	20520
515	Terengganu	20532
516	Terengganu	20534
517	Terengganu	20536
518	Terengganu	20538
519	Terengganu	20540
520	Terengganu	20542
521	Terengganu	20546
522	Terengganu	20548
523	Terengganu	20550
524	Terengganu	20551
525	Terengganu	20552
526	Terengganu	20554
527	Terengganu	20556
528	Terengganu	20560
529	Terengganu	20564
530	Terengganu	20566
531	Terengganu	20568
532	Terengganu	20570
533	Terengganu	20572
534	Terengganu	20576
535	Terengganu	20578
536	Terengganu	20582
537	Terengganu	20586
538	Terengganu	20590
539	Terengganu	20592
540	Terengganu	20596
541	Terengganu	20600
542	Terengganu	20604
543	Terengganu	20606
544	Terengganu	20608
545	Terengganu	20609
546	Terengganu	20610
547	Terengganu	20612
548	Terengganu	20614
549	Terengganu	20618
550	Terengganu	20620
551	Terengganu	20622
552	Terengganu	20626
553	Terengganu	20628
554	Terengganu	20630
555	Terengganu	20632
556	Terengganu	20646
557	Terengganu	20648
558	Terengganu	20656
559	Terengganu	20658
560	Terengganu	20660
561	Terengganu	20661
562	Terengganu	20662
563	Terengganu	20664
564	Terengganu	20668
565	Terengganu	20670
566	Terengganu	20672
567	Terengganu	20673
568	Terengganu	20674
569	Terengganu	20676
570	Terengganu	20680
571	Terengganu	20690
572	Terengganu	20698
573	Terengganu	20700
574	Terengganu	20710
575	Terengganu	20720
576	Terengganu	20900
577	Terengganu	20902
578	Terengganu	20904
579	Terengganu	20906
580	Terengganu	20908
581	Terengganu	20910
582	Terengganu	20912
583	Terengganu	20914
584	Terengganu	20916
585	Terengganu	20918
586	Terengganu	20920
587	Terengganu	20922
588	Terengganu	20924
589	Terengganu	20926
590	Terengganu	20928
591	Terengganu	20930
592	Terengganu	20990
593	Terengganu	21000
594	Terengganu	21009
595	Terengganu	21010
596	Terengganu	21020
597	Terengganu	21030
598	Terengganu	21040
599	Terengganu	21060
600	Terengganu	21070
601	Terengganu	21080
602	Terengganu	21090
603	Terengganu	21100
604	Terengganu	21109
605	Terengganu	21200
606	Terengganu	21209
607	Terengganu	21210
608	Terengganu	21220
609	Terengganu	21300
610	Terengganu	21309
611	Terengganu	21400
612	Terengganu	21450
613	Terengganu	21500
614	Terengganu	21600
615	Terengganu	21610
616	Terengganu	21700
617	Terengganu	21800
618	Terengganu	21810
619	Terengganu	21820
620	Terengganu	22000
621	Terengganu	22010
622	Terengganu	22020
623	Terengganu	22100
624	Terengganu	22107
625	Terengganu	22109
626	Terengganu	22110
627	Terengganu	22120
628	Terengganu	22200
629	Terengganu	22300
630	Terengganu	22307
631	Terengganu	22309
632	Terengganu	23000
633	Terengganu	23007
634	Terengganu	23009
635	Terengganu	23050
636	Terengganu	23100
637	Terengganu	23200
638	Terengganu	23300
639	Terengganu	23400
640	Terengganu	24000
641	Terengganu	24007
642	Terengganu	24009
643	Terengganu	24050
644	Terengganu	24060
645	Terengganu	24100
646	Terengganu	24107
647	Terengganu	24109
648	Terengganu	24200
649	Terengganu	24207
650	Terengganu	24209
651	Terengganu	24300
652	Pahang	25000
653	Pahang	25050
654	Pahang	25100
655	Pahang	25150
656	Pahang	25200
657	Pahang	25250
658	Pahang	25300
659	Pahang	25350
660	Pahang	25500
661	Pahang	25502
662	Pahang	25503
663	Pahang	25504
664	Pahang	25505
665	Pahang	25506
666	Pahang	25508
667	Pahang	25509
668	Pahang	25512
669	Pahang	25514
670	Pahang	25516
671	Pahang	25517
672	Pahang	25518
673	Pahang	25520
674	Pahang	25524
675	Pahang	25529
676	Pahang	25532
677	Pahang	25534
678	Pahang	25536
679	Pahang	25538
680	Pahang	25540
681	Pahang	25546
682	Pahang	25548
683	Pahang	25550
684	Pahang	25551
685	Pahang	25552
686	Pahang	25556
687	Pahang	25558
688	Pahang	25560
689	Pahang	25564
690	Pahang	25570
691	Pahang	25576
692	Pahang	25578
693	Pahang	25582
694	Pahang	25584
695	Pahang	25586
696	Pahang	25590
697	Pahang	25592
698	Pahang	25594
699	Pahang	25596
700	Pahang	25598
701	Pahang	25600
702	Pahang	25604
703	Pahang	25606
704	Pahang	25608
705	Pahang	25609
706	Pahang	25610
707	Pahang	25612
708	Pahang	25614
709	Pahang	25620
710	Pahang	25622
711	Pahang	25626
712	Pahang	25628
713	Pahang	25630
714	Pahang	25632
715	Pahang	25644
716	Pahang	25646
717	Pahang	25648
718	Pahang	25656
719	Pahang	25660
720	Pahang	25661
721	Pahang	25662
722	Pahang	25670
723	Pahang	25672
724	Pahang	25673
725	Pahang	25674
726	Pahang	25676
727	Pahang	25690
728	Pahang	25700
729	Pahang	25710
730	Pahang	25720
731	Pahang	25730
732	Pahang	25740
733	Pahang	25750
734	Pahang	25990
735	Pahang	26010
736	Pahang	26040
737	Pahang	26050
738	Pahang	26060
739	Pahang	26070
740	Pahang	26080
741	Pahang	26090
742	Pahang	26100
743	Pahang	26140
744	Pahang	26150
745	Pahang	26180
746	Pahang	26190
747	Pahang	26200
748	Pahang	26250
749	Pahang	26300
750	Pahang	26310
751	Pahang	26320
752	Pahang	26330
753	Pahang	26340
754	Pahang	26350
755	Pahang	26360
756	Pahang	26370
757	Pahang	26400
758	Pahang	26410
759	Pahang	26420
760	Pahang	26430
761	Pahang	26440
762	Pahang	26450
763	Pahang	26460
764	Pahang	26485
765	Pahang	26490
766	Pahang	26500
767	Pahang	26600
768	Pahang	26607
769	Pahang	26609
770	Pahang	26610
771	Pahang	26620
772	Pahang	26630
773	Pahang	26640
774	Pahang	26650
775	Pahang	26660
776	Pahang	26680
777	Pahang	26690
778	Pahang	26700
779	Pahang	26800
780	Pahang	26810
781	Pahang	26820
782	Pahang	26900
783	Pahang	27000
784	Pahang	27010
785	Pahang	27020
786	Pahang	27030
787	Pahang	27040
788	Pahang	27050
789	Pahang	27060
790	Pahang	27070
791	Pahang	27090
792	Pahang	27100
793	Pahang	27150
794	Pahang	27200
795	Pahang	27207
796	Pahang	27209
797	Pahang	27210
798	Pahang	27300
799	Pahang	27310
800	Pahang	27400
801	Pahang	27600
802	Pahang	27607
803	Pahang	27609
804	Pahang	27610
805	Pahang	27620
806	Pahang	27630
807	Pahang	27650
808	Pahang	27660
809	Pahang	27670
810	Pahang	28000
811	Pahang	28007
812	Pahang	28009
813	Pahang	28010
814	Pahang	28020
815	Pahang	28030
816	Pahang	28040
817	Pahang	28050
818	Pahang	28100
819	Pahang	28200
820	Pahang	28300
821	Pahang	28310
822	Pahang	28320
823	Pahang	28330
824	Pahang	28340
825	Pahang	28380
826	Pahang	28400
827	Pahang	28407
828	Pahang	28409
829	Pahang	28500
830	Pahang	28600
831	Pahang	28610
832	Pahang	28620
833	Pahang	28700
834	Pahang	28707
835	Pahang	28709
836	Pahang	28730
837	Pahang	28740
838	Pahang	28750
839	Pahang	28800
840	Perak	30000
841	Perak	30010
842	Perak	30020
843	Perak	30100
844	Perak	30200
845	Perak	30250
846	Perak	30300
847	Perak	30350
848	Perak	30450
849	Perak	30500
850	Perak	30502
851	Perak	30503
852	Perak	30504
853	Perak	30505
854	Perak	30506
855	Perak	30508
856	Perak	30510
857	Perak	30512
858	Perak	30516
859	Perak	30517
860	Perak	30518
861	Perak	30519
862	Perak	30520
863	Perak	30524
864	Perak	30532
865	Perak	30534
866	Perak	30536
867	Perak	30540
868	Perak	30542
869	Perak	30546
870	Perak	30548
871	Perak	30550
872	Perak	30551
873	Perak	30552
874	Perak	30554
875	Perak	30556
876	Perak	30560
877	Perak	30564
878	Perak	30570
879	Perak	30576
880	Perak	30580
881	Perak	30582
882	Perak	30586
883	Perak	30590
884	Perak	30592
885	Perak	30594
886	Perak	30596
887	Perak	30600
888	Perak	30604
889	Perak	30606
890	Perak	30609
891	Perak	30610
892	Perak	30612
893	Perak	30614
894	Perak	30620
895	Perak	30621
896	Perak	30622
897	Perak	30626
898	Perak	30628
899	Perak	30630
900	Perak	30632
901	Perak	30634
902	Perak	30644
903	Perak	30646
904	Perak	30648
905	Perak	30656
906	Perak	30658
907	Perak	30660
908	Perak	30661
909	Perak	30662
910	Perak	30664
911	Perak	30668
912	Perak	30670
913	Perak	30673
914	Perak	30674
915	Perak	30676
916	Perak	30682
917	Perak	30690
918	Perak	30700
919	Perak	30710
920	Perak	30720
921	Perak	30730
922	Perak	30740
923	Perak	30750
924	Perak	30760
925	Perak	30770
926	Perak	30780
927	Perak	30790
928	Perak	30800
929	Perak	30810
930	Perak	30820
931	Perak	30830
932	Perak	30840
933	Perak	30900
934	Perak	30902
935	Perak	30904
936	Perak	30906
937	Perak	30908
938	Perak	30910
939	Perak	30912
940	Perak	30988
941	Perak	30990
942	Perak	31000
943	Perak	31007
944	Perak	31009
945	Perak	31050
946	Perak	31100
947	Perak	31150
948	Perak	31200
949	Perak	31250
950	Perak	31300
951	Perak	31350
952	Perak	31400
953	Perak	31407
954	Perak	31409
955	Perak	31450
956	Perak	31500
957	Perak	31550
958	Perak	31560
959	Perak	31600
960	Perak	31610
961	Perak	31650
962	Perak	31700
963	Perak	31750
964	Perak	31800
965	Perak	31850
966	Perak	31900
967	Perak	31907
968	Perak	31909
969	Perak	31910
970	Perak	31920
971	Perak	31950
972	Perak	32000
973	Perak	32040
974	Perak	32100
975	Perak	32200
976	Perak	32300
977	Perak	32400
978	Perak	32500
979	Perak	32600
980	Perak	32610
981	Perak	32700
982	Perak	32800
983	Perak	32900
984	Perak	33000
985	Perak	33007
986	Perak	33009
987	Perak	33010
988	Perak	33020
989	Perak	33030
990	Perak	33040
991	Perak	33100
992	Perak	33200
993	Perak	33300
994	Perak	33310
995	Perak	33320
996	Perak	33400
997	Perak	33410
998	Perak	33420
999	Perak	33500
1000	Perak	33600
1001	Perak	33700
1002	Perak	33800
1003	Perak	34000
1004	Perak	34007
1005	Perak	34008
1006	Perak	34009
1007	Perak	34010
1008	Perak	34020
1009	Perak	34030
1010	Perak	34100
1011	Perak	34120
1012	Perak	34130
1013	Perak	34140
1014	Perak	34200
1015	Perak	34250
1016	Perak	34300
1017	Perak	34310
1018	Perak	34350
1019	Perak	34400
1020	Perak	34500
1021	Perak	34510
1022	Perak	34520
1023	Perak	34600
1024	Perak	34650
1025	Perak	34700
1026	Perak	34750
1027	Perak	34800
1028	Perak	34850
1029	Perak	34900
1030	Kedah	34950
1031	Perak	35000
1032	Perak	35007
1033	Perak	35009
1034	Perak	35300
1035	Perak	35350
1036	Perak	35400
1037	Perak	35500
1038	Perak	35600
1039	Perak	35700
1040	Perak	35800
1041	Perak	35820
1042	Perak	35900
1043	Perak	35907
1044	Perak	35909
1045	Perak	35910
1046	Perak	35950
1047	Perak	36000
1048	Perak	36007
1049	Perak	36008
1050	Perak	36009
1051	Perak	36010
1052	Perak	36020
1053	Perak	36030
1054	Perak	36100
1055	Perak	36110
1056	Perak	36200
1057	Perak	36207
1058	Perak	36209
1059	Perak	36300
1060	Perak	36307
1061	Perak	36309
1062	Perak	36400
1063	Perak	36500
1064	Perak	36600
1065	Perak	36700
1066	Perak	36750
1067	Perak	36800
1068	Perak	36810
1069	Pahang	39000
1070	Pahang	39007
1071	Pahang	39009
1072	Pahang	39010
1073	Pahang	39100
1074	Pahang	39200
1075	Selangor	40000
1076	Selangor	40100
1077	Selangor	40150
1078	Selangor	40160
1079	Selangor	40170
1080	Selangor	40200
1081	Selangor	40300
1082	Selangor	40400
1083	Selangor	40450
1084	Selangor	40460
1085	Selangor	40470
1086	Selangor	40500
1087	Selangor	40502
1088	Selangor	40503
1089	Selangor	40505
1090	Selangor	40512
1091	Selangor	40517
1092	Selangor	40520
1093	Selangor	40529
1094	Selangor	40542
1095	Selangor	40548
1096	Selangor	40550
1097	Selangor	40551
1098	Selangor	40560
1099	Selangor	40564
1100	Selangor	40570
1101	Selangor	40572
1102	Selangor	40576
1103	Selangor	40578
1104	Selangor	40582
1105	Selangor	40590
1106	Selangor	40592
1107	Selangor	40594
1108	Selangor	40596
1109	Selangor	40598
1110	Selangor	40604
1111	Selangor	40607
1112	Selangor	40608
1113	Selangor	40610
1114	Selangor	40612
1115	Selangor	40620
1116	Selangor	40622
1117	Selangor	40626
1118	Selangor	40632
1119	Selangor	40646
1120	Selangor	40648
1121	Selangor	40660
1122	Selangor	40664
1123	Selangor	40670
1124	Selangor	40672
1125	Selangor	40673
1126	Selangor	40674
1127	Selangor	40675
1128	Selangor	40676
1129	Selangor	40680
1130	Selangor	40690
1131	Selangor	40700
1132	Selangor	40702
1133	Selangor	40704
1134	Selangor	40706
1135	Selangor	40708
1136	Selangor	40710
1137	Selangor	40712
1138	Selangor	40714
1139	Selangor	40716
1140	Selangor	40718
1141	Selangor	40720
1142	Selangor	40722
1143	Selangor	40724
1144	Selangor	40726
1145	Selangor	40728
1146	Selangor	40730
1147	Selangor	40732
1148	Selangor	40800
1149	Selangor	40802
1150	Selangor	40804
1151	Selangor	40806
1152	Selangor	40808
1153	Selangor	40810
1154	Selangor	40990
1155	Selangor	41000
1156	Selangor	41050
1157	Selangor	41100
1158	Selangor	41150
1159	Selangor	41200
1160	Selangor	41250
1161	Selangor	41300
1162	Selangor	41400
1163	Selangor	41506
1164	Selangor	41560
1165	Selangor	41586
1166	Selangor	41672
1167	Selangor	41700
1168	Selangor	41710
1169	Selangor	41720
1170	Selangor	41900
1171	Selangor	41902
1172	Selangor	41904
1173	Selangor	41906
1174	Selangor	41908
1175	Selangor	41910
1176	Selangor	41912
1177	Selangor	41914
1178	Selangor	41916
1179	Selangor	41918
1180	Selangor	41990
1181	Selangor	42000
1182	Selangor	42009
1183	Selangor	42100
1184	Selangor	42200
1185	Selangor	42300
1186	Selangor	42425
1187	Selangor	42500
1188	Selangor	42507
1189	Selangor	42509
1190	Selangor	42600
1191	Selangor	42610
1192	Selangor	42700
1193	Selangor	42800
1194	Selangor	42920
1195	Selangor	42940
1196	Selangor	42960
1197	Selangor	43000
1198	Selangor	43007
1199	Selangor	43009
1200	Selangor	43100
1201	Selangor	43200
1202	Selangor	43207
1203	Selangor	43300
1204	Selangor	43400
1205	Selangor	43500
1206	Selangor	43558
1207	Selangor	43600
1208	Selangor	43650
1209	Selangor	43700
1210	Selangor	43800
1211	Selangor	43807
1212	Selangor	43900
1213	Selangor	43950
1214	Selangor	44000
1215	Selangor	44010
1216	Selangor	44020
1217	Selangor	44100
1218	Selangor	44110
1219	Selangor	44200
1220	Selangor	44300
1221	Selangor	45000
1222	Selangor	45100
1223	Selangor	45200
1224	Selangor	45207
1225	Selangor	45209
1226	Selangor	45300
1227	Selangor	45400
1228	Selangor	45500
1229	Selangor	45600
1230	Selangor	45607
1231	Selangor	45609
1232	Selangor	45620
1233	Selangor	45700
1234	Selangor	45800
1235	Selangor	46000
1236	Selangor	46050
1237	Selangor	46100
1238	Selangor	46150
1239	Selangor	46200
1240	Selangor	46300
1241	Selangor	46350
1242	Selangor	46400
1243	Selangor	46506
1244	Selangor	46547
1245	Selangor	46549
1246	Selangor	46551
1247	Selangor	46564
1248	Selangor	46582
1249	Selangor	46598
1250	Selangor	46662
1251	Selangor	46667
1252	Selangor	46668
1253	Selangor	46672
1254	Selangor	46675
1255	Selangor	46700
1256	Selangor	46710
1257	Selangor	46720
1258	Selangor	46730
1259	Selangor	46740
1260	Selangor	46750
1261	Selangor	46760
1262	Selangor	46770
1263	Selangor	46780
1264	Selangor	46781
1265	Selangor	46782
1266	Selangor	46783
1267	Selangor	46784
1268	Selangor	46785
1269	Selangor	46786
1270	Selangor	46787
1271	Selangor	46788
1272	Selangor	46789
1273	Selangor	46790
1274	Selangor	46791
1275	Selangor	46792
1276	Selangor	46793
1277	Selangor	46794
1278	Selangor	46795
1279	Selangor	46796
1280	Selangor	46797
1281	Selangor	46798
1282	Selangor	46799
1283	Selangor	46800
1284	Selangor	46801
1285	Selangor	46802
1286	Selangor	46803
1287	Selangor	46804
1288	Selangor	46805
1289	Selangor	46806
1290	Selangor	46860
1291	Selangor	46870
1292	Selangor	46960
1293	Selangor	46962
1294	Selangor	46964
1295	Selangor	46966
1296	Selangor	46968
1297	Selangor	46970
1298	Selangor	46972
1299	Selangor	46974
1300	Selangor	46976
1301	Selangor	46978
1302	Selangor	47000
1303	Selangor	47100
1304	Selangor	47110
1305	Selangor	47120
1306	Selangor	47130
1307	Selangor	47140
1308	Selangor	47150
1309	Selangor	47160
1310	Selangor	47170
1311	Selangor	47180
1312	Selangor	47190
1313	Selangor	47200
1314	Selangor	47300
1315	Selangor	47301
1316	Selangor	47307
1317	Selangor	47308
1318	Selangor	47400
1319	Selangor	47410
1320	Selangor	47500
1321	Selangor	47507
1322	Selangor	47600
1323	Selangor	47610
1324	Selangor	47620
1325	Selangor	47630
1326	Selangor	47640
1327	Selangor	47650
1328	Selangor	47800
1329	Selangor	47810
1330	Selangor	47820
1331	Selangor	47830
1332	Selangor	48000
1333	Selangor	48010
1334	Selangor	48020
1335	Selangor	48050
1336	Selangor	48100
1337	Selangor	48200
1338	Selangor	48300
1339	Pahang	49000
1340	Kuala Lumpur	50000
1341	Kuala Lumpur	50050
1342	Kuala Lumpur	50088
1343	Kuala Lumpur	50100
1344	Kuala Lumpur	50150
1345	Kuala Lumpur	50200
1346	Kuala Lumpur	50250
1347	Kuala Lumpur	50300
1348	Kuala Lumpur	50350
1349	Kuala Lumpur	50400
1350	Kuala Lumpur	50450
1351	Kuala Lumpur	50460
1352	Kuala Lumpur	50470
1353	Kuala Lumpur	50480
1354	Kuala Lumpur	50490
1355	Kuala Lumpur	50500
1356	Kuala Lumpur	50502
1357	Kuala Lumpur	50504
1358	Kuala Lumpur	50505
1359	Kuala Lumpur	50506
1360	Kuala Lumpur	50507
1361	Kuala Lumpur	50508
1362	Kuala Lumpur	50512
1363	Kuala Lumpur	50514
1364	Kuala Lumpur	50515
1365	Kuala Lumpur	50519
1366	Kuala Lumpur	50528
1367	Kuala Lumpur	50529
1368	Kuala Lumpur	50530
1369	Kuala Lumpur	50532
1370	Kuala Lumpur	50534
1371	Kuala Lumpur	50536
1372	Kuala Lumpur	50540
1373	Kuala Lumpur	50544
1374	Kuala Lumpur	50546
1375	Kuala Lumpur	50548
1376	Kuala Lumpur	50550
1377	Kuala Lumpur	50551
1378	Kuala Lumpur	50552
1379	Kuala Lumpur	50554
1380	Kuala Lumpur	50556
1381	Kuala Lumpur	50560
1382	Kuala Lumpur	50562
1383	Kuala Lumpur	50564
1384	Kuala Lumpur	50566
1385	Kuala Lumpur	50568
1386	Kuala Lumpur	50572
1387	Kuala Lumpur	50576
1388	Kuala Lumpur	50578
1389	Kuala Lumpur	50580
1390	Kuala Lumpur	50582
1391	Kuala Lumpur	50586
1392	Kuala Lumpur	50588
1393	Kuala Lumpur	50590
1394	Kuala Lumpur	50592
1395	Kuala Lumpur	50594
1396	Kuala Lumpur	50596
1397	Kuala Lumpur	50598
1398	Kuala Lumpur	50599
1399	Kuala Lumpur	50600
1400	Kuala Lumpur	50603
1401	Kuala Lumpur	50604
1402	Kuala Lumpur	50605
1403	Kuala Lumpur	50608
1404	Kuala Lumpur	50609
1405	Kuala Lumpur	50610
1406	Kuala Lumpur	50612
1407	Kuala Lumpur	50614
1408	Kuala Lumpur	50620
1409	Kuala Lumpur	50621
1410	Kuala Lumpur	50622
1411	Kuala Lumpur	50623
1412	Kuala Lumpur	50626
1413	Kuala Lumpur	50632
1414	Kuala Lumpur	50634
1415	Kuala Lumpur	50636
1416	Kuala Lumpur	50638
1417	Kuala Lumpur	50640
1418	Kuala Lumpur	50642
1419	Kuala Lumpur	50644
1420	Kuala Lumpur	50646
1421	Kuala Lumpur	50648
1422	Kuala Lumpur	50650
1423	Kuala Lumpur	50652
1424	Kuala Lumpur	50653
1425	Kuala Lumpur	50656
1426	Kuala Lumpur	50658
1427	Kuala Lumpur	50660
1428	Kuala Lumpur	50661
1429	Kuala Lumpur	50662
1430	Kuala Lumpur	50664
1431	Kuala Lumpur	50666
1432	Kuala Lumpur	50668
1433	Kuala Lumpur	50670
1434	Kuala Lumpur	50672
1435	Kuala Lumpur	50673
1436	Kuala Lumpur	50676
1437	Kuala Lumpur	50677
1438	Kuala Lumpur	50678
1439	Kuala Lumpur	50680
1440	Kuala Lumpur	50682
1441	Kuala Lumpur	50684
1442	Kuala Lumpur	50688
1443	Kuala Lumpur	50694
1444	Kuala Lumpur	50700
1445	Kuala Lumpur	50702
1446	Kuala Lumpur	50704
1447	Kuala Lumpur	50706
1448	Kuala Lumpur	50708
1449	Kuala Lumpur	50710
1450	Kuala Lumpur	50712
1451	Kuala Lumpur	50714
1452	Kuala Lumpur	50716
1453	Kuala Lumpur	50718
1454	Kuala Lumpur	50720
1455	Kuala Lumpur	50722
1456	Kuala Lumpur	50724
1457	Kuala Lumpur	50726
1458	Kuala Lumpur	50728
1459	Kuala Lumpur	50730
1460	Kuala Lumpur	50732
1461	Kuala Lumpur	50734
1462	Kuala Lumpur	50736
1463	Kuala Lumpur	50738
1464	Kuala Lumpur	50740
1465	Kuala Lumpur	50742
1466	Kuala Lumpur	50744
1467	Kuala Lumpur	50746
1468	Kuala Lumpur	50748
1469	Kuala Lumpur	50750
1470	Kuala Lumpur	50752
1471	Kuala Lumpur	50754
1472	Kuala Lumpur	50758
1473	Kuala Lumpur	50760
1474	Kuala Lumpur	50762
1475	Kuala Lumpur	50764
1476	Kuala Lumpur	50766
1477	Kuala Lumpur	50768
1478	Kuala Lumpur	50770
1479	Kuala Lumpur	50772
1480	Kuala Lumpur	50774
1481	Kuala Lumpur	50776
1482	Kuala Lumpur	50778
1483	Kuala Lumpur	50780
1484	Kuala Lumpur	50782
1485	Kuala Lumpur	50784
1486	Kuala Lumpur	50786
1487	Kuala Lumpur	50788
1488	Kuala Lumpur	50790
1489	Kuala Lumpur	50792
1490	Kuala Lumpur	50794
1491	Kuala Lumpur	50796
1492	Kuala Lumpur	50798
1493	Kuala Lumpur	50800
1494	Kuala Lumpur	50802
1495	Kuala Lumpur	50804
1496	Kuala Lumpur	50806
1497	Kuala Lumpur	50808
1498	Kuala Lumpur	50810
1499	Kuala Lumpur	50812
1500	Kuala Lumpur	50814
1501	Kuala Lumpur	50816
1502	Kuala Lumpur	50818
1503	Kuala Lumpur	50901
1504	Kuala Lumpur	50902
1505	Kuala Lumpur	50903
1506	Kuala Lumpur	50904
1507	Kuala Lumpur	50906
1508	Kuala Lumpur	50907
1509	Kuala Lumpur	50908
1510	Kuala Lumpur	50909
1511	Kuala Lumpur	50910
1512	Kuala Lumpur	50911
1513	Kuala Lumpur	50912
1514	Kuala Lumpur	50913
1515	Kuala Lumpur	50914
1516	Kuala Lumpur	50915
1517	Kuala Lumpur	50916
1518	Kuala Lumpur	50917
1519	Kuala Lumpur	50918
1520	Kuala Lumpur	50919
1521	Kuala Lumpur	50920
1522	Kuala Lumpur	50921
1523	Kuala Lumpur	50922
1524	Kuala Lumpur	50923
1525	Kuala Lumpur	50924
1526	Kuala Lumpur	50925
1527	Kuala Lumpur	50926
1528	Kuala Lumpur	50927
1529	Kuala Lumpur	50928
1530	Kuala Lumpur	50929
1531	Kuala Lumpur	50930
1532	Kuala Lumpur	50931
1533	Kuala Lumpur	50932
1534	Kuala Lumpur	50933
1535	Kuala Lumpur	50934
1536	Kuala Lumpur	50935
1537	Kuala Lumpur	50936
1538	Kuala Lumpur	50937
1539	Kuala Lumpur	50938
1540	Kuala Lumpur	50939
1541	Kuala Lumpur	50940
1542	Kuala Lumpur	50941
1543	Kuala Lumpur	50942
1544	Kuala Lumpur	50943
1545	Kuala Lumpur	50944
1546	Kuala Lumpur	50945
1547	Kuala Lumpur	50946
1548	Kuala Lumpur	50947
1549	Kuala Lumpur	50948
1550	Kuala Lumpur	50949
1551	Kuala Lumpur	50950
1552	Kuala Lumpur	50988
1553	Kuala Lumpur	50989
1554	Kuala Lumpur	50990
1555	Kuala Lumpur	51000
1556	Kuala Lumpur	51100
1557	Kuala Lumpur	51200
1558	Kuala Lumpur	51700
1559	Kuala Lumpur	51990
1560	Kuala Lumpur	52000
1561	Kuala Lumpur	52100
1562	Kuala Lumpur	52200
1563	Kuala Lumpur	53000
1564	Kuala Lumpur	53100
1565	Kuala Lumpur	53200
1566	Kuala Lumpur	53300
1567	Kuala Lumpur	53700
1568	Kuala Lumpur	53800
1569	Kuala Lumpur	53990
1570	Kuala Lumpur	54000
1571	Kuala Lumpur	54100
1572	Kuala Lumpur	54200
1573	Kuala Lumpur	55000
1574	Kuala Lumpur	55100
1575	Kuala Lumpur	55200
1576	Kuala Lumpur	55300
1577	Kuala Lumpur	55700
1578	Kuala Lumpur	55710
1579	Kuala Lumpur	55720
1580	Kuala Lumpur	55900
1581	Kuala Lumpur	55902
1582	Kuala Lumpur	55904
1583	Kuala Lumpur	55906
1584	Kuala Lumpur	55908
1585	Kuala Lumpur	55910
1586	Kuala Lumpur	55912
1587	Kuala Lumpur	55914
1588	Kuala Lumpur	55916
1589	Kuala Lumpur	55918
1590	Kuala Lumpur	55920
1591	Kuala Lumpur	55922
1592	Kuala Lumpur	55924
1593	Kuala Lumpur	55926
1594	Kuala Lumpur	55928
1595	Kuala Lumpur	55930
1596	Kuala Lumpur	55932
1597	Kuala Lumpur	55934
1598	Kuala Lumpur	55990
1599	Kuala Lumpur	56000
1600	Kuala Lumpur	56100
1601	Kuala Lumpur	57000
1602	Kuala Lumpur	57100
1603	Kuala Lumpur	57700
1604	Kuala Lumpur	57990
1605	Kuala Lumpur	58000
1606	Kuala Lumpur	58100
1607	Kuala Lumpur	58200
1608	Kuala Lumpur	58700
1609	Kuala Lumpur	58990
1610	Kuala Lumpur	59000
1611	Kuala Lumpur	59100
1612	Kuala Lumpur	59200
1613	Kuala Lumpur	59700
1614	Kuala Lumpur	59800
1615	Kuala Lumpur	59990
1616	Kuala Lumpur	60000
1617	PJY	62000
1618	PJY	62007
1619	PJY	62050
1620	PJY	62100
1621	PJY	62150
1622	PJY	62200
1623	PJY	62250
1624	PJY	62300
1625	PJY	62502
1626	PJY	62504
1627	PJY	62505
1628	PJY	62506
1629	PJY	62510
1630	PJY	62512
1631	PJY	62514
1632	PJY	62516
1633	PJY	62517
1634	PJY	62518
1635	PJY	62519
1636	PJY	62520
1637	PJY	62522
1638	PJY	62524
1639	PJY	62526
1640	PJY	62527
1641	PJY	62530
1642	PJY	62532
1643	PJY	62536
1644	PJY	62540
1645	PJY	62542
1646	PJY	62546
1647	PJY	62550
1648	PJY	62551
1649	PJY	62570
1650	PJY	62574
1651	PJY	62576
1652	PJY	62582
1653	PJY	62584
1654	PJY	62590
1655	PJY	62592
1656	PJY	62596
1657	PJY	62602
1658	PJY	62604
1659	PJY	62605
1660	PJY	62606
1661	PJY	62616
1662	PJY	62618
1663	PJY	62620
1664	PJY	62623
1665	PJY	62624
1666	PJY	62628
1667	PJY	62630
1668	PJY	62632
1669	PJY	62648
1670	PJY	62652
1671	PJY	62654
1672	PJY	62662
1673	PJY	62668
1674	PJY	62670
1675	PJY	62674
1676	PJY	62675
1677	PJY	62676
1678	PJY	62677
1679	PJY	62686
1680	PJY	62692
1681	PJY	62988
1682	Selangor	63000
1683	Selangor	63100
1684	Selangor	63200
1685	Selangor	63300
1686	Selangor	64000
1687	Selangor	68000
1688	Selangor	68100
1689	Pahang	69000
1690	Negeri Sembilan	70000
1691	Negeri Sembilan	70100
1692	Negeri Sembilan	70200
1693	Negeri Sembilan	70300
1694	Negeri Sembilan	70400
1695	Negeri Sembilan	70450
1696	Negeri Sembilan	70500
1697	Negeri Sembilan	70502
1698	Negeri Sembilan	70503
1699	Negeri Sembilan	70504
1700	Negeri Sembilan	70505
1701	Negeri Sembilan	70506
1702	Negeri Sembilan	70508
1703	Negeri Sembilan	70512
1704	Negeri Sembilan	70516
1705	Negeri Sembilan	70517
1706	Negeri Sembilan	70518
1707	Negeri Sembilan	70532
1708	Negeri Sembilan	70534
1709	Negeri Sembilan	70536
1710	Negeri Sembilan	70540
1711	Negeri Sembilan	70546
1712	Negeri Sembilan	70548
1713	Negeri Sembilan	70550
1714	Negeri Sembilan	70551
1715	Negeri Sembilan	70558
1716	Negeri Sembilan	70560
1717	Negeri Sembilan	70564
1718	Negeri Sembilan	70570
1719	Negeri Sembilan	70572
1720	Negeri Sembilan	70576
1721	Negeri Sembilan	70578
1722	Negeri Sembilan	70582
1723	Negeri Sembilan	70586
1724	Negeri Sembilan	70590
1725	Negeri Sembilan	70592
1726	Negeri Sembilan	70594
1727	Negeri Sembilan	70596
1728	Negeri Sembilan	70600
1729	Negeri Sembilan	70604
1730	Negeri Sembilan	70606
1731	Negeri Sembilan	70608
1732	Negeri Sembilan	70609
1733	Negeri Sembilan	70610
1734	Negeri Sembilan	70620
1735	Negeri Sembilan	70626
1736	Negeri Sembilan	70628
1737	Negeri Sembilan	70632
1738	Negeri Sembilan	70634
1739	Negeri Sembilan	70644
1740	Negeri Sembilan	70646
1741	Negeri Sembilan	70648
1742	Negeri Sembilan	70658
1743	Negeri Sembilan	70664
1744	Negeri Sembilan	70670
1745	Negeri Sembilan	70672
1746	Negeri Sembilan	70673
1747	Negeri Sembilan	70674
1748	Negeri Sembilan	70676
1749	Negeri Sembilan	70690
1750	Negeri Sembilan	70700
1751	Negeri Sembilan	70710
1752	Negeri Sembilan	70720
1753	Negeri Sembilan	70730
1754	Negeri Sembilan	70740
1755	Negeri Sembilan	70750
1756	Negeri Sembilan	70990
1757	Negeri Sembilan	71000
1758	Negeri Sembilan	71007
1759	Negeri Sembilan	71009
1760	Negeri Sembilan	71010
1761	Negeri Sembilan	71050
1762	Negeri Sembilan	71059
1763	Negeri Sembilan	71100
1764	Negeri Sembilan	71109
1765	Negeri Sembilan	71150
1766	Negeri Sembilan	71159
1767	Negeri Sembilan	71200
1768	Negeri Sembilan	71209
1769	Negeri Sembilan	71250
1770	Negeri Sembilan	71259
1771	Negeri Sembilan	71300
1772	Negeri Sembilan	71309
1773	Negeri Sembilan	71350
1774	Negeri Sembilan	71359
1775	Negeri Sembilan	71400
1776	Negeri Sembilan	71409
1777	Negeri Sembilan	71450
1778	Negeri Sembilan	71459
1779	Negeri Sembilan	71500
1780	Negeri Sembilan	71509
1781	Negeri Sembilan	71550
1782	Negeri Sembilan	71559
1783	Negeri Sembilan	71600
1784	Negeri Sembilan	71609
1785	Negeri Sembilan	71650
1786	Negeri Sembilan	71659
1787	Negeri Sembilan	71700
1788	Negeri Sembilan	71707
1789	Negeri Sembilan	71709
1790	Negeri Sembilan	71750
1791	Negeri Sembilan	71759
1792	Negeri Sembilan	71760
1793	Negeri Sembilan	71770
1794	Negeri Sembilan	71800
1795	Negeri Sembilan	71807
1796	Negeri Sembilan	71809
1797	Negeri Sembilan	71900
1798	Negeri Sembilan	71907
1799	Negeri Sembilan	71909
1800	Negeri Sembilan	71950
1801	Negeri Sembilan	71960
1802	Negeri Sembilan	72000
1803	Negeri Sembilan	72007
1804	Negeri Sembilan	72009
1805	Negeri Sembilan	72100
1806	Negeri Sembilan	72107
1807	Negeri Sembilan	72109
1808	Negeri Sembilan	72120
1809	Negeri Sembilan	72127
1810	Negeri Sembilan	72129
1811	Negeri Sembilan	72200
1812	Negeri Sembilan	72207
1813	Negeri Sembilan	72209
1814	Negeri Sembilan	72300
1815	Negeri Sembilan	72307
1816	Negeri Sembilan	72309
1817	Negeri Sembilan	72400
1818	Negeri Sembilan	72409
1819	Negeri Sembilan	72500
1820	Negeri Sembilan	72507
1821	Negeri Sembilan	72509
1822	Negeri Sembilan	73000
1823	Negeri Sembilan	73007
1824	Negeri Sembilan	73009
1825	Negeri Sembilan	73100
1826	Negeri Sembilan	73109
1827	Negeri Sembilan	73200
1828	Negeri Sembilan	73207
1829	Negeri Sembilan	73209
1830	Negeri Sembilan	73300
1831	Negeri Sembilan	73309
1832	Negeri Sembilan	73400
1833	Negeri Sembilan	73409
1834	Negeri Sembilan	73420
1835	Negeri Sembilan	73430
1836	Negeri Sembilan	73440
1837	Negeri Sembilan	73450
1838	Negeri Sembilan	73460
1839	Negeri Sembilan	73470
1840	Negeri Sembilan	73480
1841	Negeri Sembilan	73500
1842	Negeri Sembilan	73507
1843	Negeri Sembilan	73509
1844	Melaka	75000
1845	Melaka	75050
1846	Melaka	75100
1847	Melaka	75150
1848	Melaka	75200
1849	Melaka	75250
1850	Melaka	75260
1851	Melaka	75300
1852	Melaka	75350
1853	Melaka	75400
1854	Melaka	75450
1855	Melaka	75460
1856	Melaka	75500
1857	Melaka	75502
1858	Melaka	75503
1859	Melaka	75504
1860	Melaka	75505
1861	Melaka	75506
1862	Melaka	75508
1863	Melaka	75510
1864	Melaka	75512
1865	Melaka	75514
1866	Melaka	75516
1867	Melaka	75517
1868	Melaka	75518
1869	Melaka	75519
1870	Melaka	75532
1871	Melaka	75536
1872	Melaka	75538
1873	Melaka	75540
1874	Melaka	75542
1875	Melaka	75546
1876	Melaka	75550
1877	Melaka	75551
1878	Melaka	75552
1879	Melaka	75560
1880	Melaka	75564
1881	Melaka	75566
1882	Melaka	75570
1883	Melaka	75572
1884	Melaka	75576
1885	Melaka	75578
1886	Melaka	75582
1887	Melaka	75584
1888	Melaka	75586
1889	Melaka	75590
1890	Melaka	75592
1891	Melaka	75594
1892	Melaka	75596
1893	Melaka	75600
1894	Melaka	75604
1895	Melaka	75606
1896	Melaka	75608
1897	Melaka	75609
1898	Melaka	75610
1899	Melaka	75612
1900	Melaka	75618
1901	Melaka	75620
1902	Melaka	75622
1903	Melaka	75626
1904	Melaka	75628
1905	Melaka	75630
1906	Melaka	75632
1907	Melaka	75646
1908	Melaka	75648
1909	Melaka	75662
1910	Melaka	75670
1911	Melaka	75672
1912	Melaka	75673
1913	Melaka	75674
1914	Melaka	75676
1915	Melaka	75690
1916	Melaka	75700
1917	Melaka	75710
1918	Melaka	75720
1919	Melaka	75730
1920	Melaka	75740
1921	Melaka	75750
1922	Melaka	75760
1923	Melaka	75900
1924	Melaka	75902
1925	Melaka	75904
1926	Melaka	75906
1927	Melaka	75908
1928	Melaka	75910
1929	Melaka	75912
1930	Melaka	75914
1931	Melaka	75916
1932	Melaka	75918
1933	Melaka	75990
1934	Melaka	76100
1935	Melaka	76109
1936	Melaka	76200
1937	Melaka	76300
1938	Melaka	76400
1939	Melaka	76409
1940	Melaka	76450
1941	Melaka	77000
1942	Melaka	77007
1943	Melaka	77008
1944	Melaka	77009
1945	Melaka	77100
1946	Melaka	77109
1947	Melaka	77200
1948	Melaka	77300
1949	Melaka	77309
1950	Melaka	77400
1951	Melaka	77409
1952	Melaka	77500
1953	Melaka	78000
1954	Melaka	78009
1955	Melaka	78100
1956	Melaka	78200
1957	Melaka	78300
1958	Melaka	78307
1959	Melaka	78309
1960	Johor	79000
1961	Johor	79100
1962	Johor	79150
1963	Johor	79200
1964	Johor	79250
1965	Johor	79502
1966	Johor	79503
1967	Johor	79504
1968	Johor	79505
1969	Johor	79511
1970	Johor	79513
1971	Johor	79514
1972	Johor	79517
1973	Johor	79518
1974	Johor	79520
1975	Johor	79521
1976	Johor	79523
1977	Johor	79532
1978	Johor	79538
1979	Johor	79540
1980	Johor	79546
1981	Johor	79548
1982	Johor	79550
1983	Johor	79552
1984	Johor	79555
1985	Johor	79570
1986	Johor	79575
1987	Johor	79576
1988	Johor	79592
1989	Johor	79601
1990	Johor	79603
1991	Johor	79605
1992	Johor	79606
1993	Johor	79612
1994	Johor	79626
1995	Johor	79630
1996	Johor	79632
1997	Johor	79646
1998	Johor	79658
1999	Johor	79660
2000	Johor	79680
2001	Johor	79681
2002	Johor	79683
2003	Johor	80000
2004	Johor	80050
2005	Johor	80100
2006	Johor	80150
2007	Johor	80200
2008	Johor	80250
2009	Johor	80300
2010	Johor	80350
2011	Johor	80400
2012	Johor	80500
2013	Johor	80506
2014	Johor	80508
2015	Johor	80516
2016	Johor	80519
2017	Johor	80534
2018	Johor	80536
2019	Johor	80542
2020	Johor	80546
2021	Johor	80558
2022	Johor	80560
2023	Johor	80564
2024	Johor	80568
2025	Johor	80578
2026	Johor	80584
2027	Johor	80586
2028	Johor	80590
2029	Johor	80592
2030	Johor	80594
2031	Johor	80596
2032	Johor	80600
2033	Johor	80604
2034	Johor	80608
2035	Johor	80620
2036	Johor	80622
2037	Johor	80628
2038	Johor	80644
2039	Johor	80648
2040	Johor	80662
2041	Johor	80664
2042	Johor	80668
2043	Johor	80670
2044	Johor	80672
2045	Johor	80673
2046	Johor	80676
2047	Johor	80700
2048	Johor	80710
2049	Johor	80720
2050	Johor	80730
2051	Johor	80900
2052	Johor	80902
2053	Johor	80904
2054	Johor	80906
2055	Johor	80908
2056	Johor	80988
2057	Johor	80990
2058	Johor	81000
2059	Johor	81100
2060	Johor	81200
2061	Johor	81300
2062	Johor	81310
2063	Johor	81400
2064	Johor	81440
2065	Johor	81450
2066	Johor	81500
2067	Johor	81550
2068	Johor	81600
2069	Johor	81700
2070	Johor	81750
2071	Johor	81800
2072	Johor	81850
2073	Johor	81900
2074	Johor	81920
2075	Johor	81930
2076	Johor	82000
2077	Johor	82100
2078	Johor	82200
2079	Johor	82300
2080	Johor	83000
2081	Johor	83100
2082	Johor	83200
2083	Johor	83300
2084	Johor	83400
2085	Johor	83500
2086	Johor	83600
2087	Johor	83700
2088	Johor	84000
2089	Johor	84150
2090	Johor	84200
2091	Johor	84300
2092	Johor	84400
2093	Johor	84500
2094	Johor	84600
2095	Johor	84700
2096	Johor	84800
2097	Johor	84900
2098	Johor	85000
2099	Johor	85100
2100	Johor	85200
2101	Johor	85300
2102	Johor	85400
2103	Johor	86000
2104	Johor	86100
2105	Johor	86200
2106	Johor	86300
2107	Johor	86400
2108	Johor	86500
2109	Johor	86600
2110	Johor	86700
2111	Johor	86800
2112	Johor	86810
2113	Johor	86900
2114	Labuan	87000
2115	Labuan	87010
2116	Labuan	87011
2117	Labuan	87012
2118	Labuan	87013
2119	Labuan	87014
2120	Labuan	87015
2121	Labuan	87016
2122	Labuan	87017
2123	Labuan	87018
2124	Labuan	87019
2125	Labuan	87020
2126	Labuan	87021
2127	Labuan	87022
2128	Labuan	87023
2129	Labuan	87024
2130	Labuan	87025
2131	Labuan	87026
2132	Labuan	87027
2133	Labuan	87028
2134	Labuan	87029
2135	Labuan	87030
2136	Labuan	87031
2137	Labuan	87032
2138	Labuan	87033
2139	Sabah	88000
2140	Sabah	88100
2141	Sabah	88200
2142	Sabah	88300
2143	Sabah	88400
2144	Sabah	88450
2145	Sabah	88460
2146	Sabah	88500
2147	Sabah	88502
2148	Sabah	88504
2149	Sabah	88505
2150	Sabah	88506
2151	Sabah	88508
2152	Sabah	88510
2153	Sabah	88512
2154	Sabah	88514
2155	Sabah	88516
2156	Sabah	88518
2157	Sabah	88520
2158	Sabah	88526
2159	Sabah	88527
2160	Sabah	88532
2161	Sabah	88534
2162	Sabah	88538
2163	Sabah	88540
2164	Sabah	88546
2165	Sabah	88550
2166	Sabah	88551
2167	Sabah	88552
2168	Sabah	88554
2169	Sabah	88556
2170	Sabah	88558
2171	Sabah	88560
2172	Sabah	88562
2173	Sabah	88564
2174	Sabah	88566
2175	Sabah	88568
2176	Sabah	88570
2177	Sabah	88572
2178	Sabah	88576
2179	Sabah	88580
2180	Sabah	88582
2181	Sabah	88586
2182	Sabah	88590
2183	Sabah	88592
2184	Sabah	88594
2185	Sabah	88596
2186	Sabah	88598
2187	Sabah	88600
2188	Sabah	88602
2189	Sabah	88604
2190	Sabah	88606
2191	Sabah	88608
2192	Sabah	88609
2193	Sabah	88610
2194	Sabah	88612
2195	Sabah	88614
2196	Sabah	88617
2197	Sabah	88618
2198	Sabah	88620
2199	Sabah	88621
2200	Sabah	88622
2201	Sabah	88624
2202	Sabah	88626
2203	Sabah	88628
2204	Sabah	88630
2205	Sabah	88632
2206	Sabah	88634
2207	Sabah	88644
2208	Sabah	88646
2209	Sabah	88648
2210	Sabah	88656
2211	Sabah	88658
2212	Sabah	88660
2213	Sabah	88661
2214	Sabah	88662
2215	Sabah	88670
2216	Sabah	88672
2217	Sabah	88673
2218	Sabah	88675
2219	Sabah	88676
2220	Sabah	88680
2221	Sabah	88690
2222	Sabah	88700
2223	Sabah	88721
2224	Sabah	88722
2225	Sabah	88723
2226	Sabah	88724
2227	Sabah	88725
2228	Sabah	88757
2229	Sabah	88758
2230	Sabah	88759
2231	Sabah	88760
2232	Sabah	88761
2233	Sabah	88762
2234	Sabah	88763
2235	Sabah	88764
2236	Sabah	88765
2237	Sabah	88766
2238	Sabah	88767
2239	Sabah	88768
2240	Sabah	88769
2241	Sabah	88770
2242	Sabah	88771
2243	Sabah	88772
2244	Sabah	88773
2245	Sabah	88774
2246	Sabah	88775
2247	Sabah	88776
2248	Sabah	88777
2249	Sabah	88778
2250	Sabah	88779
2251	Sabah	88780
2252	Sabah	88781
2253	Sabah	88782
2254	Sabah	88783
2255	Sabah	88784
2256	Sabah	88785
2257	Sabah	88786
2258	Sabah	88787
2259	Sabah	88788
2260	Sabah	88789
2261	Sabah	88790
2262	Sabah	88800
2263	Sabah	88801
2264	Sabah	88802
2265	Sabah	88803
2266	Sabah	88804
2267	Sabah	88805
2268	Sabah	88806
2269	Sabah	88807
2270	Sabah	88808
2271	Sabah	88809
2272	Sabah	88810
2273	Sabah	88811
2274	Sabah	88812
2275	Sabah	88813
2276	Sabah	88814
2277	Sabah	88815
2278	Sabah	88816
2279	Sabah	88817
2280	Sabah	88818
2281	Sabah	88819
2282	Sabah	88820
2283	Sabah	88821
2284	Sabah	88822
2285	Sabah	88823
2286	Sabah	88824
2287	Sabah	88825
2288	Sabah	88826
2289	Sabah	88827
2290	Sabah	88828
2291	Sabah	88829
2292	Sabah	88830
2293	Sabah	88831
2294	Sabah	88832
2295	Sabah	88833
2296	Sabah	88834
2297	Sabah	88835
2298	Sabah	88836
2299	Sabah	88837
2300	Sabah	88838
2301	Sabah	88839
2302	Sabah	88840
2303	Sabah	88841
2304	Sabah	88842
2305	Sabah	88843
2306	Sabah	88844
2307	Sabah	88845
2308	Sabah	88846
2309	Sabah	88847
2310	Sabah	88848
2311	Sabah	88849
2312	Sabah	88850
2313	Sabah	88851
2314	Sabah	88852
2315	Sabah	88853
2316	Sabah	88854
2317	Sabah	88855
2318	Sabah	88856
2319	Sabah	88857
2320	Sabah	88858
2321	Sabah	88860
2322	Sabah	88861
2323	Sabah	88862
2324	Sabah	88863
2325	Sabah	88865
2326	Sabah	88866
2327	Sabah	88867
2328	Sabah	88868
2329	Sabah	88869
2330	Sabah	88870
2331	Sabah	88871
2332	Sabah	88872
2333	Sabah	88873
2334	Sabah	88874
2335	Sabah	88875
2336	Sabah	88900
2337	Sabah	88901
2338	Sabah	88902
2339	Sabah	88903
2340	Sabah	88904
2341	Sabah	88905
2342	Sabah	88906
2343	Sabah	88988
2344	Sabah	88990
2345	Sabah	88991
2346	Sabah	88992
2347	Sabah	88993
2348	Sabah	88994
2349	Sabah	88995
2350	Sabah	88996
2351	Sabah	88997
2352	Sabah	88998
2353	Sabah	88999
2354	Sabah	89000
2355	Sabah	89007
2356	Sabah	89008
2357	Sabah	89009
2358	Sabah	89050
2359	Sabah	89057
2360	Sabah	89058
2361	Sabah	89059
2362	Sabah	89100
2363	Sabah	89107
2364	Sabah	89108
2365	Sabah	89109
2366	Sabah	89150
2367	Sabah	89157
2368	Sabah	89158
2369	Sabah	89159
2370	Sabah	89200
2371	Sabah	89207
2372	Sabah	89208
2373	Sabah	89209
2374	Sabah	89250
2375	Sabah	89257
2376	Sabah	89258
2377	Sabah	89259
2378	Sabah	89260
2379	Sabah	89300
2380	Sabah	89307
2381	Sabah	89308
2382	Sabah	89309
2383	Sabah	89500
2384	Sabah	89507
2385	Sabah	89508
2386	Sabah	89509
2387	Sabah	89600
2388	Sabah	89607
2389	Sabah	89608
2390	Sabah	89609
2391	Sabah	89650
2392	Sabah	89657
2393	Sabah	89658
2394	Sabah	89659
2395	Sabah	89700
2396	Sabah	89707
2397	Sabah	89708
2398	Sabah	89709
2399	Sabah	89720
2400	Sabah	89727
2401	Sabah	89728
2402	Sabah	89729
2403	Sabah	89740
2404	Sabah	89747
2405	Sabah	89748
2406	Sabah	89749
2407	Sabah	89760
2408	Sabah	89767
2409	Sabah	89768
2410	Sabah	89769
2411	Sabah	89800
2412	Sabah	89807
2413	Sabah	89808
2414	Sabah	89809
2415	Sabah	89850
2416	Sabah	89857
2417	Sabah	89858
2418	Sabah	89859
2419	Sabah	89900
2420	Sabah	89907
2421	Sabah	89908
2422	Sabah	89909
2423	Sabah	89950
2424	Sabah	89957
2425	Sabah	89958
2426	Sabah	89959
2427	Sabah	90000
2428	Sabah	90009
2429	Sabah	90100
2430	Sabah	90107
2431	Sabah	90109
2432	Sabah	90200
2433	Sabah	90300
2434	Sabah	90307
2435	Sabah	90400
2436	Sabah	90700
2437	Sabah	90701
2438	Sabah	90702
2439	Sabah	90703
2440	Sabah	90704
2441	Sabah	90705
2442	Sabah	90706
2443	Sabah	90707
2444	Sabah	90708
2445	Sabah	90709
2446	Sabah	90711
2447	Sabah	90712
2448	Sabah	90713
2449	Sabah	90714
2450	Sabah	90715
2451	Sabah	90716
2452	Sabah	90717
2453	Sabah	90718
2454	Sabah	90719
2455	Sabah	90720
2456	Sabah	90721
2457	Sabah	90722
2458	Sabah	90723
2459	Sabah	90724
2460	Sabah	90725
2461	Sabah	90726
2462	Sabah	90727
2463	Sabah	90728
2464	Sabah	90729
2465	Sabah	90730
2466	Sabah	90731
2467	Sabah	90732
2468	Sabah	90733
2469	Sabah	90734
2470	Sabah	90735
2471	Sabah	90736
2472	Sabah	90737
2473	Sabah	90738
2474	Sabah	90739
2475	Sabah	90740
2476	Sabah	90741
2477	Sabah	91000
2478	Sabah	91007
2479	Sabah	91008
2480	Sabah	91009
2481	Sabah	91010
2482	Sabah	91011
2483	Sabah	91012
2484	Sabah	91013
2485	Sabah	91014
2486	Sabah	91015
2487	Sabah	91016
2488	Sabah	91017
2489	Sabah	91018
2490	Sabah	91019
2491	Sabah	91020
2492	Sabah	91021
2493	Sabah	91022
2494	Sabah	91023
2495	Sabah	91024
2496	Sabah	91025
2497	Sabah	91026
2498	Sabah	91027
2499	Sabah	91028
2500	Sabah	91029
2501	Sabah	91030
2502	Sabah	91031
2503	Sabah	91032
2504	Sabah	91033
2505	Sabah	91034
2506	Sabah	91035
2507	Sabah	91100
2508	Sabah	91109
2509	Sabah	91110
2510	Sabah	91111
2511	Sabah	91112
2512	Sabah	91113
2513	Sabah	91114
2514	Sabah	91115
2515	Sabah	91116
2516	Sabah	91117
2517	Sabah	91118
2518	Sabah	91119
2519	Sabah	91120
2520	Sabah	91121
2521	Sabah	91122
2522	Sabah	91123
2523	Sabah	91124
2524	Sabah	91125
2525	Sabah	91126
2526	Sabah	91127
2527	Sabah	91128
2528	Sabah	91150
2529	Sabah	91200
2530	Sabah	91207
2531	Sabah	91209
2532	Sabah	91300
2533	Sabah	91307
2534	Sabah	91308
2535	Sabah	91309
2536	Sarawak	93000
2537	Sarawak	93010
2538	Sarawak	93050
2539	Sarawak	93100
2540	Sarawak	93150
2541	Sarawak	93200
2542	Sarawak	93250
2543	Sarawak	93300
2544	Sarawak	93350
2545	Sarawak	93400
2546	Sarawak	93450
2547	Sarawak	93500
2548	Sarawak	93502
2549	Sarawak	93503
2550	Sarawak	93504
2551	Sarawak	93505
2552	Sarawak	93506
2553	Sarawak	93507
2554	Sarawak	93508
2555	Sarawak	93514
2556	Sarawak	93516
2557	Sarawak	93517
2558	Sarawak	93518
2559	Sarawak	93519
2560	Sarawak	93520
2561	Sarawak	93527
2562	Sarawak	93529
2563	Sarawak	93532
2564	Sarawak	93540
2565	Sarawak	93550
2566	Sarawak	93551
2567	Sarawak	93552
2568	Sarawak	93554
2569	Sarawak	93556
2570	Sarawak	93558
2571	Sarawak	93560
2572	Sarawak	93564
2573	Sarawak	93566
2574	Sarawak	93570
2575	Sarawak	93572
2576	Sarawak	93576
2577	Sarawak	93578
2578	Sarawak	93582
2579	Sarawak	93586
2580	Sarawak	93590
2581	Sarawak	93592
2582	Sarawak	93594
2583	Sarawak	93596
2584	Sarawak	93600
2585	Sarawak	93604
2586	Sarawak	93606
2587	Sarawak	93608
2588	Sarawak	93609
2589	Sarawak	93610
2590	Sarawak	93612
2591	Sarawak	93614
2592	Sarawak	93618
2593	Sarawak	93619
2594	Sarawak	93620
2595	Sarawak	93626
2596	Sarawak	93628
2597	Sarawak	93632
2598	Sarawak	93634
2599	Sarawak	93648
2600	Sarawak	93658
2601	Sarawak	93660
2602	Sarawak	93661
2603	Sarawak	93662
2604	Sarawak	93670
2605	Sarawak	93672
2606	Sarawak	93677
2607	Sarawak	93690
2608	Sarawak	93694
2609	Sarawak	93700
2610	Sarawak	93702
2611	Sarawak	93704
2612	Sarawak	93706
2613	Sarawak	93708
2614	Sarawak	93710
2615	Sarawak	93712
2616	Sarawak	93714
2617	Sarawak	93716
2618	Sarawak	93718
2619	Sarawak	93720
2620	Sarawak	93722
2621	Sarawak	93724
2622	Sarawak	93726
2623	Sarawak	93728
2624	Sarawak	93730
2625	Sarawak	93732
2626	Sarawak	93734
2627	Sarawak	93736
2628	Sarawak	93738
2629	Sarawak	93740
2630	Sarawak	93742
2631	Sarawak	93744
2632	Sarawak	93746
2633	Sarawak	93748
2634	Sarawak	93750
2635	Sarawak	93752
2636	Sarawak	93754
2637	Sarawak	93756
2638	Sarawak	93758
2639	Sarawak	93760
2640	Sarawak	93762
2641	Sarawak	93764
2642	Sarawak	93900
2643	Sarawak	93902
2644	Sarawak	93904
2645	Sarawak	93906
2646	Sarawak	93908
2647	Sarawak	93910
2648	Sarawak	93912
2649	Sarawak	93914
2650	Sarawak	93916
2651	Sarawak	93990
2652	Sarawak	94000
2653	Sarawak	94007
2654	Sarawak	94009
2655	Sarawak	94200
2656	Sarawak	94300
2657	Sarawak	94500
2658	Sarawak	94507
2659	Sarawak	94509
2660	Sarawak	94600
2661	Sarawak	94650
2662	Sarawak	94700
2663	Sarawak	94707
2664	Sarawak	94709
2665	Sarawak	94750
2666	Sarawak	94760
2667	Sarawak	94800
2668	Sarawak	94807
2669	Sarawak	94809
2670	Sarawak	94850
2671	Sarawak	94900
2672	Sarawak	94950
2673	Sarawak	95000
2674	Sarawak	95007
2675	Sarawak	95008
2676	Sarawak	95009
2677	Sarawak	95300
2678	Sarawak	95400
2679	Sarawak	95407
2680	Sarawak	95409
2681	Sarawak	95500
2682	Sarawak	95600
2683	Sarawak	95700
2684	Sarawak	95707
2685	Sarawak	95709
2686	Sarawak	95800
2687	Sarawak	95900
2688	Sarawak	96000
2689	Sarawak	96007
2690	Sarawak	96008
2691	Sarawak	96009
2692	Sarawak	96100
2693	Sarawak	96107
2694	Sarawak	96108
2695	Sarawak	96109
2696	Sarawak	96150
2697	Sarawak	96200
2698	Sarawak	96250
2699	Sarawak	96300
2700	Sarawak	96307
2701	Sarawak	96309
2702	Sarawak	96350
2703	Sarawak	96400
2704	Sarawak	96410
2705	Sarawak	96500
2706	Sarawak	96507
2707	Sarawak	96508
2708	Sarawak	96509
2709	Sarawak	96600
2710	Sarawak	96700
2711	Sarawak	96707
2712	Sarawak	96709
2713	Sarawak	96800
2714	Sarawak	96807
2715	Sarawak	96809
2716	Sarawak	96850
2717	Sarawak	96900
2718	Sarawak	97000
2719	Sarawak	97007
2720	Sarawak	97008
2721	Sarawak	97009
2722	Sarawak	97010
2723	Sarawak	97011
2724	Sarawak	97012
2725	Sarawak	97013
2726	Sarawak	97014
2727	Sarawak	97015
2728	Sarawak	97100
2729	Sarawak	97200
2730	Sarawak	97300
2731	Sarawak	98000
2732	Sarawak	98007
2733	Sarawak	98008
2734	Sarawak	98009
2735	Sarawak	98050
2736	Sarawak	98057
2737	Sarawak	98058
2738	Sarawak	98059
2739	Sarawak	98100
2740	Sarawak	98107
2741	Sarawak	98109
2742	Sarawak	98150
2743	Sarawak	98157
2744	Sarawak	98159
2745	Sarawak	98200
2746	Sarawak	98300
2747	Sarawak	98700
2748	Sarawak	98707
2749	Sarawak	98708
2750	Sarawak	98709
2751	Sarawak	98750
2752	Sarawak	98800
2753	Sarawak	98850
2754	Sarawak	98857
2755	Sarawak	98859
\.


--
-- Name: location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('location_id_seq', 2755, true);


--
-- Data for Name: package; Type: TABLE DATA; Schema: public; Owner: -
--

COPY package (id, courierid, length, width, height, price, weight, link) FROM stdin;
\.


--
-- Name: package_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('package_id_seq', 1, false);


--
-- Name: courier_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY courier
    ADD CONSTRAINT courier_pkey PRIMARY KEY (id);


--
-- Name: dropoff_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY dropoff
    ADD CONSTRAINT dropoff_pkey PRIMARY KEY (id);


--
-- Name: location_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY location
    ADD CONSTRAINT location_pkey PRIMARY KEY (id);


--
-- Name: package_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY package
    ADD CONSTRAINT package_pkey PRIMARY KEY (id);


--
-- Name: dropoff_courierid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY dropoff
    ADD CONSTRAINT dropoff_courierid_fkey FOREIGN KEY (courierid) REFERENCES courier(id);


--
-- Name: dropoff_locationid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY dropoff
    ADD CONSTRAINT dropoff_locationid_fkey FOREIGN KEY (locationid) REFERENCES location(id);


--
-- Name: package_courierid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY package
    ADD CONSTRAINT package_courierid_fkey FOREIGN KEY (courierid) REFERENCES courier(id);


--
-- Name: public; Type: ACL; Schema: -; Owner: -
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

